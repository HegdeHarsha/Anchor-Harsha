/* =====================================================
   SITE CONTROL PANEL  (edit this file only)
   Save, upload to GitHub, done.
   ===================================================== */
window.SITE = {
  name: "Harsha Hegde Kondadakuli",
  email: "punarvasu1001@gmail.com",
  countryCode: "91",
  phone: "9740745306",
  /* ---------- LANGUAGES ----------
     ["en", "kn"]  = both languages, with a switch button in the top bar
     ["en"]        = English only (switch button is hidden)
     ["kn"]        = Kannada only (switch button is hidden)
  */
  languages: ["en", "kn"],
  defaultLang: "en",            // first language shown when both are on ("en" or "kn")
  whatsappMessage: "Hello Harsha, I would like to talk about hosting our event.",
  whatsappMessageKn: "ನಮಸ್ಕಾರ ಹರ್ಷ, ನಮ್ಮ ಕಾರ್ಯಕ್ರಮದ ನಿರೂಪಣೆಯ ಬಗ್ಗೆ ಮಾತನಾಡಲು ಬಯಸುತ್ತೇನೆ.",

  /* GALLERY and VIDEOS: true = show, false = hide the whole section and its menu link */
  sections: { gallery: true, videos: true },

  /* ---------- PHOTOS ----------
     Each photo can be ANY of these:
       1. A file in your repo:   "assets/gallery/stage1.jpg"
       2. A Google Drive link:   "https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
          (Drive: Share > General access > "Anyone with the link")
       3. Any direct image link: "https://example.com/photo.jpg"
     Plain link, or with captions in both languages:
       { src: "assets/gallery/stage1.jpg", caption: "Annual day", captionKn: "ವಾರ್ಷಿಕೋತ್ಸವ" }
     Add  visible: false  to hide one without deleting it.
  */
  gallery: [
     "assets/images/0.png",
     "assets/images/a.jpeg",
     "assets/images/aa.jpeg",
     "assets/images/aaa.jpeg",
     "assets/images/aaaa.jpeg",
     "assets/images/aaaaa.jpeg",
     "assets/images/ab.jpeg"
    // "assets/gallery/stage1.jpg",
    // "https://drive.google.com/file/d/FILE_ID/view?usp=sharing",
    // { src: "assets/gallery/stage2.jpg", caption: "Annual day, Bengaluru", captionKn: "ವಾರ್ಷಿಕೋತ್ಸವ, ಬೆಂಗಳೂರು" },
  ],

  /* ---------- VIDEOS ----------
     Each video can be ANY of these (all play on your page):
       1. YouTube link:       "https://www.youtube.com/watch?v=XXXXXXXXXXX"  (shorts and youtu.be also work)
       2. Google Drive link:  "https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
       3. File in your repo:  "assets/videos/highlights.mp4"
       4. Vimeo link
       5. Any other link (Instagram, Facebook) shows as a "Watch video" button
     Plain link, or with titles in both languages:
       { url: "https://youtu.be/XXXXXXXXXXX", title: "Showreel", titleKn: "ಶೋರೀಲ್" }
  */
  videos: [
    // "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    // { url: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing", title: "Stage highlights", titleKn: "ವೇದಿಕೆಯ ಮುಖ್ಯಾಂಶಗಳು" },
    // { url: "assets/videos/highlights.mp4", title: "Concert hosting", titleKn: "ಸಂಗೀತ ಕಛೇರಿ ನಿರೂಪಣೆ" },
  ]
};
