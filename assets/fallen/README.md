# Fallen-soldiers portraits

Portrait images for the fallen-soldiers memorial wall (`fallen-soldiers-memorial.html`).

## Drop-in convention
- **Filename = the soldier's `id`** from `fallen-soldiers-data.js`, e.g. `s-habaka-salman.jpg`
  (`.jpg`, `.png`, or `.webp`).
- In the data file, set `photo:"assets/fallen/<id>.<ext>"` and
  `photoCredit:"<exact credit>"` (e.g. `"אתר יזכור — משרד הביטחון"`).
- Local files only (served as CSP `'self'` — no CSP change needed).
- Square-ish portraits crop best (cards use a 1:1 slot, `object-fit:cover`, top-anchored).

## Sacred rule
A face goes in ONLY with a clear, creditable source AND Nathaniel's approval of that
specific portrait. Where none is cleared, leave `photo:null` — the card shows a
dignified candle 🕯 instead. A candle beats an uncertain or misappropriated face.

## The 13 (ids)
s-abudi-adir · s-adany-eily · s-dushi-rotem · s-rozenshtein-bar · s-brodski-kiril ·
s-kiean-habib · s-eden-haim-meir · s-zloof-yair · s-habaka-salman · s-dishon-eytan ·
s-nifousy-yair · s-assayag-ravit · s-lubin-rose
