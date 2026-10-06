/* =====================================================
   SITE CONTROL PANEL  (edit this file only)
   Save, upload to GitHub, done.
   ===================================================== */
window.SITE = {
  name: "Harsha Hegde Kondadakuli",
  email: "punarvasu1001@gmail.com",
  countryCode: "91",
  phone: "9740745306",
  whatsappMessage: "Hello Harsha, I would like to talk about hosting our event.",

  /* true = show section, false = hide it (and its menu link) */
  sections: { gallery: true, videos: true },

  /* ---------- PHOTOS ----------
     Each photo can be ANY of these:
       1. A file in your repo:   "assets/gallery/stage1.jpg"
       2. A Google Drive link:   "https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
          (Drive: Share > General access > "Anyone with the link")
       3. Any direct image link: "https://example.com/photo.jpg"
     Plain link, or with a caption / hide switch:
       { src: "assets/gallery/stage1.jpg", caption: "Annual day", visible: true }
  */
  gallery: [
    // "assets/gallery/stage1.jpg",
    // "https://drive.google.com/file/d/FILE_ID/view?usp=sharing",
    // { src: "assets/gallery/stage2.jpg", caption: "Annual day, Bengaluru" },
  ],

  /* ---------- VIDEOS ----------
     Each video can be ANY of these (all play on your page):
       1. YouTube link:       "https://www.youtube.com/watch?v=XXXXXXXXXXX"  (shorts and youtu.be also work)
       2. Google Drive link:  "https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
       3. File in your repo:  "assets/videos/highlights.mp4"
       4. Vimeo link
       5. Any other link (Instagram, Facebook) shows as a "Watch video" button
     Plain link, or with a title / hide switch:
       { url: "https://youtu.be/XXXXXXXXXXX", title: "Showreel", visible: true }
  */
  videos: [
    // "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    // { url: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing", title: "Stage highlights" },
    // { url: "assets/videos/highlights.mp4", title: "Concert hosting" },
  ]
};
