# Harsha Hegde Kondadakuli: Emcee Portfolio (English + Kannada)

Static site. No build step, no install.

## Publish on GitHub Pages
1. Create a repository and upload everything inside this folder (keep `.nojekyll`).
2. Settings > Pages > Deploy from a branch > `main` > `/ (root)`.
3. Live at `https://<username>.github.io/<repo>/`.

## Edit
Only `config.js` needs editing: phone, email, photos, videos.
- Photos: file in `assets/gallery/`, a Google Drive share link, or any image link.
- Videos: YouTube, Google Drive, Vimeo, an mp4 in `assets/videos/`, or any link.
- Google Drive files must be shared as "Anyone with the link".
- Repo videos must stay under 100 MB. For longer ones use YouTube or Drive.
- Add `captionKn` / `titleKn` to show Kannada text when the visitor switches language.

## Show or hide
- `sections: { gallery: false }` hides Gallery, `videos: false` hides Videos.
- `languages: ["en"]` shows English only, `["kn"]` Kannada only. `["en","kn"]` shows both with the switch button.

## Features
- Georgia typeface throughout (Noto Serif Kannada is used for Kannada letters, since Georgia has none).
- English / Kannada switch in the top bar (remembered on the visitor's device).
- Light / dark switch (follows the phone's setting until the visitor chooses).
- Fully responsive with a Call and WhatsApp bar on mobile.
