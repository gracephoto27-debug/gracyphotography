# Grace Photography — Asset Upload Guide

Use this guide to upload photos and videos into the correct section. The website HTML/CSS/JS already points to the filenames below. Keep every filename and extension exactly as written.

## Existing files — already in the repository
- `assets/grace-photography-logo.png` — header/footer logo
- `assets/grace-photography-logo.jpg` — alternate logo file
- `assets/instagram-icon.png` — Instagram icon
- `assets/whatsapp-icon.png` — WhatsApp icon
- `assets/wedding-feature.png` — current first homepage hero, About image and first Featured Gallery image
- `assets/hero-slide-02.jpg` — second homepage hero
- `assets/hero-slide-03.jpg` — third homepage hero

## Upload folders
- [Featured Gallery](assets/gallery/) — five additional homepage gallery photos
- [Wedding & Reception](assets/portfolio/wedding-reception/) — six wedding photos
- [Pre & Post-Wedding](assets/portfolio/pre-post-wedding/) — six couple photos
- [Baby Shoot](assets/portfolio/baby-shoot/) — six baby photos
- [Maternity Shoot](assets/portfolio/maternity-shoot/) — six maternity photos
- [Cinematic Videos](assets/cinematic-videos/) — six MP4 videos
- [Video Posters / Thumbnails](assets/cinematic-videos/posters/) — optional thumbnail image for each video

## 1. Homepage hero images
These are already linked:
- Slide 01: `assets/wedding-feature.png` (existing)
- Slide 02: `assets/hero-slide-02.jpg` (already in repository)
- Slide 03: `assets/hero-slide-03.jpg` (already in repository)

## 2. Featured Gallery — upload 5 files to `assets/gallery/`
| Save filename | Shown as |
|---|---|
| `gallery-02-couple.jpg` | Couple Portraits |
| `gallery-03-bridal.jpg` | Bridal Details |
| `gallery-04-baby.jpg` | Little Moments |
| `gallery-05-maternity.jpg` | Motherhood |
| `gallery-06-family.jpg` | Family Celebrations |

Gallery image 01 already uses `assets/wedding-feature.png`.

## 3. Wedding & Reception — `assets/portfolio/wedding-reception/`
Upload:
`wedding-01.jpg`, `wedding-02.jpg`, `wedding-03.jpg`, `wedding-04.jpg`, `wedding-05.jpg`, `wedding-06.jpg`.

## 4. Pre & Post-Wedding — `assets/portfolio/pre-post-wedding/`
Upload:
`couple-01.jpg`, `couple-02.jpg`, `couple-03.jpg`, `couple-04.jpg`, `couple-05.jpg`, `couple-06.jpg`.

## 5. Baby Shoot — `assets/portfolio/baby-shoot/`
Upload:
`baby-01.jpg`, `baby-02.jpg`, `baby-03.jpg`, `baby-04.jpg`, `baby-05.jpg`, `baby-06.jpg`.

## 6. Maternity Shoot — `assets/portfolio/maternity-shoot/`
Upload:
`maternity-01.jpg`, `maternity-02.jpg`, `maternity-03.jpg`, `maternity-04.jpg`, `maternity-05.jpg`, `maternity-06.jpg`.

## 7. Cinematic Videos — `assets/cinematic-videos/`
Upload MP4 files:
`film-01.mp4`, `film-02.mp4`, `film-03.mp4`, `film-04.mp4`, `film-05.mp4`, `film-06.mp4`.

Videos 01–02 appear on the homepage. Videos 03–06 appear on the separate Cinematic Videos page. Click a video frame to load and play its MP4 file.

Optional posters go into `assets/cinematic-videos/posters/`:
`film-01.jpg`, `film-02.jpg`, `film-03.jpg`, `film-04.jpg`, `film-05.jpg`, `film-06.jpg`.

## Other sections
- About section currently reuses `assets/wedding-feature.png`.
- Header/footer logo and social icons already use the existing files listed above.
- Services, testimonials, Google Maps and contact form are text / embedded content and do not currently require photo uploads.

## Upload steps
1. Open the folder link above.
2. Choose **Add file → Upload files**.
3. Upload the file(s) into that exact folder.
4. Commit directly to the `main` branch.
5. Do not rename files after upload. Vercel will deploy the committed assets automatically if its Git integration is active.

Recommended photo format: JPG or WebP, landscape/portrait crop appropriate to the frame, high quality but optimized for web. Recommended video format: MP4 (H.264 video + AAC audio).