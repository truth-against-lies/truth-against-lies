/* ============================================================
   Fallen Soldiers Memorial — scalable wall renderer
   Truth Against Lies | truth-against-lies.github.io

   Consumes two sources and merges them (curated wins, dedupe by legacyId):
     1. FALLEN_SOLDIERS  — the hand-curated souls, already in the page language
                           (richer: approved higher-res/press photos + written
                           bilingual stories). Loaded from fallen-soldiers-data(-en).js
     2. FALLEN_MANIFEST  — (optional) the izkor bulk manifest, bilingual records,
                           adapted + language-picked here. Drops in with no remap.

   Adds: search (name/unit/hometown), filters (branch, category, month),
   live count, lazy/chunked rendering for hundreds. Keeps the candle 🕯
   fallback (onerror) and the chronological honor-roll sort.

   Pure helpers are exported on window.FallenWall for node testing; DOM init
   runs only in a browser. ============================================ */
(function(global){
  'use strict';

  // ---- language ----
  function pageLang(){
    try { return (document.documentElement.getAttribute('lang') === 'he') ? 'he' : 'en'; }
    catch(e){ return 'en'; }
  }

  // ---- text helpers ----
  function stripHtml(s){ return (s||'').replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim(); }
  function titleCaseCity(s){ if(!s) return ''; return String(s).replace(/\w\S*/g, function(t){ return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(); }); }
  function isBoilerplateStory(s){ var t=stripHtml(s).toLowerCase(); return !t || /dedicated to (his|her|their) memory/.test(t) || t.length < 40; }
  function excerpt(s, n){ var t=stripHtml(s); if(!t) return ''; n=n||180; if(t.length<=n) return t;
    var cut=t.slice(0,n); var dot=cut.lastIndexOf('. '); if(dot>n*0.5) return cut.slice(0,dot+1);
    var sp=cut.lastIndexOf(' '); return (sp>0?cut.slice(0,sp):cut).replace(/[,;:]$/,'')+'…'; }

  var MONTHS_EN=['January','February','March','April','May','June','July','August','September','October','November','December'];
  var MONTHS_HE=['בינואר','בפברואר','במרץ','באפריל','במאי','ביוני','ביולי','באוגוסט','בספטמבר','באוקטובר','בנובמבר','בדצמבר'];
  function fmtDate(iso, he){ if(!iso) return ''; var p=String(iso).split('-'); if(p.length!==3) return iso;
    var y=+p[0],m=+p[1],d=+p[2]; if(!m) return iso;
    return he ? (d+' '+MONTHS_HE[m-1]+' '+y) : (MONTHS_EN[m-1]+' '+d+', '+y); }
  function monthLabel(ym, he){ var p=ym.split('-'); var y=+p[0],m=+p[1]; return he ? (MONTHS_HE[m-1]+' '+y) : (MONTHS_EN[m-1]+' '+y); }

  // ---- branch / category derivation ----
  // Order = priority (first match wins). Specific brigades before generic "infantry".
  // Hebrew patterns use medial letter-forms (e.g. צנחנ matches צנחנים/הצנחנים).
  var BRANCHES=[
    ['borderpolice',/border|משמר הגבול|מג"ב|magav/i,            'Border Police','משמר הגבול'],
    ['golani',      /golani|גולני/i,                            'Golani','גולני'],
    ['paratroopers',/paratroop|צנחנ/i,                          'Paratroopers','צנחנים'],
    ['nahal',       /nahal|נח"ל|נחל/i,                          'Nahal','נח"ל'],
    ['givati',      /givati|גבעתי/i,                            'Givati','גבעתי'],
    ['kfir',        /kfir|כפיר/i,                               'Kfir Brigade','כפיר'],
    ['armored',     /armor|שריון|tank|טנק|שיריון/i,             'Armored Corps','שריון'],
    ['commando',    /commando|קומנדו|maglan|מגלן/i,             'Commando','קומנדו'],
    ['intelligence',/intelligence|observ|תצפית|איסוף|מודיעין|414/i,'Intelligence','מודיעין'],
    ['medical',     /medical|medic|רפוא|רופא|חובש|כירורג/i,      'Medical Corps','חיל הרפואה'],
    ['airforce',    /air\s*force|air\s*traffic|חיל האוויר|אוויר/i,'Air Force','חיל האוויר'],
    ['homefront',   /home front|פיקוד העורף|חילוץ/i,            'Home Front','פיקוד העורף'],
    ['engineering', /engineer|הנדס|חבלה/i,                       'Engineering','הנדסה'],
    ['artillery',   /artillery|תותחנ|ארטילר/i,                  'Artillery','תותחנים'],
    ['navy',        /\bnavy|naval|חיל הים|שייטת/i,              'Navy','חיל הים'],
    ['logistics',   /logistic|לוגיסטי|אספקה/i,                  'Logistics','לוגיסטיקה'],
    ['tech',        /technolog|maintenance|אחזקה|תחזוקה|טכנולוג|ציוד/i,'Technology & Maintenance','טכנולוגיה ואחזקה'],
    ['infantry',    /infantry|חיל רגלים|חי"ר/i,                 'Infantry','חיל רגלים']
  ];
  function deriveBranch(txt){ var s=txt||''; for(var i=0;i<BRANCHES.length;i++){ if(BRANCHES[i][1].test(s)) return BRANCHES[i][0]; } return 'other'; }
  function branchLabel(key, he){ for(var i=0;i<BRANCHES.length;i++){ if(BRANCHES[i][0]===key) return he?BRANCHES[i][3]:BRANCHES[i][2]; } return he?'אחר':'Other'; }
  function deriveCategory(txt){ var s=txt||''; if(/border|police|משמר הגבול|מג"ב/i.test(s)) return 'security'; return 'soldier'; }
  function categoryLabel(key, he){
    if(key==='security') return he?'כוחות הביטחון':'Security forces';
    if(key==='civilian') return he?'אזרחים':'Civilians';
    return he?'חיילים':'Soldiers';
  }

  // ---- normalize a CURATED record (already in page language) ----
  function normCurated(r, he){
    var unit=r.unit||'';
    return {
      key: r.legacyId || r.id,
      legacyId: r.legacyId||null,
      curated: true,
      name: r.name||'', rank: r.rank||'', age: (r.age!=null?r.age:null),
      unit: unit, branch: deriveBranch(unit+' '+(r.name||'')), category: deriveCategory(unit),
      dateISO: r.dateISO||'', date: r.date || fmtDate(r.dateISO, he),
      hometown: r.hometown||'', hometownApprox:false,
      story: r.note||'',
      photo: r.photo||null, photoCredit: r.photoCredit||'', photoAvailable: !!r.photo,
      source: r.source||'', pending:false
    };
  }

  // ---- adapt a MANIFEST record (bilingual) to the page language ----
  function adaptManifest(r, he){
    var h = r.hebrew || null;
    var pending = (!h) && !!r.hebrew_fetch_error;
    var unitEn=r.unit_name_en||'', unitHe=(h&&h.unit_name_he)||'';
    var unit = he ? (unitHe||unitEn) : unitEn;
    var storyHe = h && h.life_story_he;
    var enBoiler = isBoilerplateStory(r.life_story_en);
    var story = he ? excerpt(storyHe,180) : (enBoiler ? '' : excerpt(r.life_story_en,180));
    var hometown = he ? ((h&&h.birth_city_he) ? h.birth_city_he : titleCaseCity(r.birth_city||''))
                      : titleCaseCity(r.birth_city||'');
    // self-hosted local path by legacy_id (placed into repo separately); candle if no photo.
    var photo = (r.photo_available && r.legacy_id) ? ('assets/fallen/'+r.legacy_id+'.jpg') : null;
    return {
      key: r.legacy_id || r.person_id,
      legacyId: r.legacy_id||null,
      curated: false,
      name: he ? ((h&&h.full_name_he)||r.full_name_en||'') : (r.full_name_en||''),
      rank: he ? ((h&&h.rank_he)||r.rank_en||'') : (r.rank_en||''),
      age: (r.age!=null && r.age!=='') ? parseInt(r.age,10) : null,
      unit: unit, branch: deriveBranch(unitEn+' '+unitHe), category: deriveCategory(unitEn+' '+unitHe),
      dateISO: r.death_date_iso||'', date: fmtDate(r.death_date_iso, he),
      hometown: hometown, hometownApprox: !!hometown,
      story: story,
      photo: photo, photoCredit: 'אתר יזכור — משרד הביטחון', photoAvailable: !!r.photo_available,
      source: r.source_url_en||'',
      gender: r.gender_label||'', genderFlag: r.gender_note||null,
      pending: pending, enStoryThin: enBoiler
    };
  }

  // ---- merge curated + manifest, dedupe by legacyId (curated wins) ----
  function merge(curatedList, manifestList, he){
    var out=[], seen={};
    (curatedList||[]).forEach(function(r){ var m=normCurated(r,he); out.push(m); if(m.legacyId) seen[m.legacyId]=true; });
    (manifestList||[]).forEach(function(r){ if(r.legacy_id && seen[r.legacy_id]) return; out.push(adaptManifest(r,he)); });
    return out;
  }

  // ---- sort: oldest-fallen first, then name ----
  function sortList(list){ return list.slice().sort(function(a,b){
    return (a.dateISO||'').localeCompare(b.dateISO||'') || (a.name||'').localeCompare(b.name||''); }); }

  // ---- filter + search ----
  function applyFilters(list, f){
    f=f||{}; var q=(f.q||'').trim().toLowerCase();
    return list.filter(function(m){
      if(f.branch && m.branch!==f.branch) return false;
      if(f.category && m.category!==f.category) return false;
      if(f.month && (m.dateISO||'').slice(0,7)!==f.month) return false;
      if(q){ var hay=((m.name||'')+' '+(m.unit||'')+' '+(m.hometown||'')).toLowerCase(); if(hay.indexOf(q)<0) return false; }
      return true;
    });
  }

  // expose pure helpers for testing
  var api = { normCurated:normCurated, adaptManifest:adaptManifest, merge:merge, sortList:sortList,
              applyFilters:applyFilters, deriveBranch:deriveBranch, deriveCategory:deriveCategory,
              branchLabel:branchLabel, categoryLabel:categoryLabel, fmtDate:fmtDate, monthLabel:monthLabel, excerpt:excerpt };
  global.FallenWall = api;

  // ================= DOM (browser only) =================
  if (typeof document === 'undefined') return;

  function el(tag, cls){ var e=document.createElement(tag); if(cls) e.className=cls; return e; }
  var CANDLE='🕯';

  function buildCard(m, he){
    var card=el('div','fallen-card'); card.setAttribute('dir','auto');
    var pw=el('div','fallen-photo-wrap');
    function addCandle(){ var c=el('div','fallen-candle'); c.setAttribute('aria-hidden','true'); c.textContent=CANDLE; pw.appendChild(c); }
    var creditEl=null;
    if(m.photo){
      var img=el('img'); img.src=m.photo; img.alt=m.name||''; img.loading='lazy';
      img.onerror=function(){ if(img.parentNode) pw.removeChild(img); addCandle(); if(creditEl&&creditEl.parentNode) creditEl.parentNode.removeChild(creditEl); };
      pw.appendChild(img);
    } else { addCandle(); }
    card.appendChild(pw);
    if(m.photo && m.photoCredit){ creditEl=el('div','fallen-photo-credit'); creditEl.setAttribute('dir','auto'); creditEl.textContent=m.photoCredit; card.appendChild(creditEl); }
    var body=el('div','fallen-body');
    var nm=el('div','fallen-name');
    if(m.rank){ var r=el('span','fallen-rank'); r.textContent=m.rank+' '; nm.appendChild(r); }
    nm.appendChild(document.createTextNode(m.name||''));
    if(m.age!=null){ var ag=el('span','fallen-age'); ag.textContent=' ('+m.age+')'; nm.appendChild(ag); }
    body.appendChild(nm);
    var meta=el('div','fallen-meta');
    function tag(t){ if(!t) return; var e=el('span','fallen-tag'); e.setAttribute('dir','auto'); e.textContent=t; meta.appendChild(e); }
    tag(m.unit); tag(m.date); tag(m.hometown);
    if(meta.childNodes.length) body.appendChild(meta);
    if(m.story){ var nt=el('div','fallen-note'); nt.setAttribute('dir','auto'); nt.textContent=m.story; body.appendChild(nt); }
    if(m.source){ var sd=el('div','source');
      if(/^https?:\/\//.test(m.source)){ var a=el('a'); a.href=m.source; a.target='_blank'; a.rel='noopener noreferrer';
        try{ a.textContent=new URL(m.source).hostname.replace(/^www\./,''); }catch(e){ a.textContent=(he?'מקור':'source'); }
        sd.appendChild(document.createTextNode(he?'מקור: ':'Source: ')); sd.appendChild(a);
      } else { sd.textContent=(he?'מקור: ':'Source: ')+m.source; }
      body.appendChild(sd);
    }
    card.appendChild(body);
    return card;
  }

  function init(){
    var wrap=document.getElementById('fallen-list');
    if(!wrap) return;
    var he = pageLang()==='he';
    var curated = global.FALLEN_SOLDIERS || [];
    var manifest = global.FALLEN_MANIFEST || [];
    var all = sortList(merge(curated, manifest, he));
    if(!all.length) return;

    // ---- controls bar ----
    var controls=el('div','fallen-controls');
    var search=el('input','fallen-search'); search.type='search';
    search.setAttribute('placeholder', he?'חיפוש לפי שם, יחידה או יישוב…':'Search name, unit or hometown…');
    search.setAttribute('aria-label', he?'חיפוש':'Search');
    var branchSel=el('select','fallen-filter'); var catSel=el('select','fallen-filter'); var monthSel=el('select','fallen-filter');
    function opt(sel, val, label){ var o=el('option'); o.value=val; o.textContent=label; sel.appendChild(o); }
    // branch options present in data
    var branchesPresent={}; all.forEach(function(m){ branchesPresent[m.branch]=true; });
    opt(branchSel,'', he?'כל הזרועות':'All branches');
    Object.keys(branchesPresent).sort().forEach(function(b){ opt(branchSel,b,branchLabel(b,he)); });
    // category options
    var catsPresent={}; all.forEach(function(m){ catsPresent[m.category]=true; });
    opt(catSel,'', he?'הכול':'All');
    ['soldier','security','civilian'].forEach(function(c){ if(catsPresent[c]) opt(catSel,c,categoryLabel(c,he)); });
    // month options present
    var monthsPresent={}; all.forEach(function(m){ var ym=(m.dateISO||'').slice(0,7); if(ym) monthsPresent[ym]=true; });
    opt(monthSel,'', he?'כל התאריכים':'All dates');
    Object.keys(monthsPresent).sort().forEach(function(ym){ opt(monthSel,ym,monthLabel(ym,he)); });

    var count=el('div','fallen-count');
    controls.appendChild(search); controls.appendChild(branchSel); controls.appendChild(catSel); controls.appendChild(monthSel); controls.appendChild(count);
    wrap.parentNode.insertBefore(controls, wrap);

    var grid=el('div','fallen-grid'); wrap.appendChild(grid);
    var empty=el('div','fallen-empty'); empty.style.display='none';
    empty.textContent = he?'לא נמצאו תוצאות.':'No results.'; wrap.appendChild(empty);

    // ---- lazy/chunked rendering ----
    var CHUNK=60, filtered=all, shown=0, sentinel=null, io=null;
    function fmtCount(n,total){ return he ? ('מציג '+n+' מתוך '+total) : (n+' of '+total); }
    function clearGrid(){ while(grid.firstChild) grid.removeChild(grid.firstChild); shown=0; }
    function renderMore(){
      var next=filtered.slice(shown, shown+CHUNK);
      next.forEach(function(m){ grid.appendChild(buildCard(m,he)); });
      shown+=next.length;
      count.textContent=fmtCount(shown, filtered.length);
      if(shown>=filtered.length && io && sentinel){ io.unobserve(sentinel); }
    }
    function recompute(){
      filtered = applyFilters(all, { q:search.value, branch:branchSel.value, category:catSel.value, month:monthSel.value });
      clearGrid();
      empty.style.display = filtered.length ? 'none' : 'block';
      count.textContent=fmtCount(Math.min(CHUNK,filtered.length), filtered.length);
      renderMore();
      if(io && sentinel && shown<filtered.length) io.observe(sentinel);
    }
    // infinite scroll sentinel
    sentinel=el('div','fallen-sentinel'); wrap.appendChild(sentinel);
    if('IntersectionObserver' in global){
      io=new IntersectionObserver(function(entries){ entries.forEach(function(e){ if(e.isIntersecting && shown<filtered.length) renderMore(); }); }, {rootMargin:'400px'});
    }
    var t=null; function debounced(){ clearTimeout(t); t=setTimeout(recompute,160); }
    search.addEventListener('input', debounced);
    branchSel.addEventListener('change', recompute);
    catSel.addEventListener('change', recompute);
    monthSel.addEventListener('change', recompute);

    recompute();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();

})(typeof window!=='undefined' ? window : globalThis);
