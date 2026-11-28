# Grace Photography Website — First Theme Build

A responsive static portfolio website for Grace Photography, Adyar, Chennai.

## Included
- Premium golden-hour / warm sunset palette (champagne gold, amber, espresso and cream)
- Arun Photography-inspired horizontal header, navigation, social buttons and large hero slider
- Three hero slides with auto-advance, arrows and dots
- Portfolio, services, about, experience, testimonials, enquiry form and footer
- Responsive mobile navigation and floating Instagram / WhatsApp shortcuts
- Supplied Grace Photography logo, Instagram icon, WhatsApp icon and wedding photograph

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Before publishing
1. Replace the Instagram link `https://www.instagram.com/` with Grace Photography's actual profile URL.
2. Confirm the WhatsApp number `919841484476` is correct.
3. Add the final portfolio photographs and wedding videos. The portfolio tiles without photos and the second/third hero slides are intentional theme placeholders for the next content pass.
4. Connect the enquiry form to a backend/email service if submissions should be stored. Currently it composes a WhatsApp message for the customer to send.
5. Verify address, phone number, rating and testimonials before publishing.

## Main files
- `index.html` — website content and sections
- `styles.css` — theme, layout, animation and responsive styling
- `script.js` — slider, mobile menu and WhatsApp enquiry form
- `assets/` — supplied brand and photography assets


## Portfolio structure update
- Removed the "A Little About Our Lens" intro block and replaced it with an "Our Portfolio" landing heading.
- Added four collection rows with Arun Photography-inspired titles, descriptions, four-column image grids and View More links: Wedding & Reception, Pre & Post-Wedding, Baby Photography, and Maternity Photography.
- Added standalone pages: `wedding-reception.html`, `pre-post-wedding.html`, `baby-shoot.html`, and `maternity-shoot.html`.
- Each page includes a dedicated heading, description, six image-ready gallery slots, enquiry CTA and shared navigation/footer.
- Gallery areas are intentionally prepared as image placeholders for the photography and video assets to be supplied later. Existing homepage hero, services, about, testimonials and contact form remain.


## Cinematic videos section
- Added a Cinematic Stories feature section to the homepage with exactly two side-by-side video-ready frames.
- Added a View More link to `cinematic-videos.html`.
- Added the dedicated cinematic videos page with four additional video-ready frames (films 03–06).
- Video cards are designed placeholders only; no video files have been inserted yet. Replace each cinematic video frame placeholder with a `<video controls>` element or a hosted embed when final clips are supplied.
- Layout is responsive and follows the Arun Photography reference: centred cinematic heading, left-aligned video subheading, horizontal desktop video grid, and clear View More action.


## Organized asset upload folders
- See [ASSET-UPLOAD-GUIDE.md](ASSET-UPLOAD-GUIDE.md) for the full file naming checklist and upload instructions.
- Images are organized by Featured Gallery, Wedding & Reception, Pre & Post-Wedding, Baby Shoot and Maternity Shoot.
- Cinematic video files are wired to six named MP4 paths with optional poster images.
- Upload each file into the exact folder and filename listed in the guide; do not rename the files.


## Golden Hour / Sunset & Warm Gold palette
The full website theme now follows the supplied reference palette:
- Deep Brown: `#5A2F16`
- Burnt Amber: `#A65A2A`
- Warm Gold: `#F2B866`
- Soft Ivory: `#FFF3E0`
- White: `#FFFFFF`

The shared `styles.css` applies this palette to the homepage, hero, portfolio collection rows, gallery, services, about section, testimonials, cinematic video section, map, contact form, header, navigation, footer and all portfolio detail pages. Browser theme colors use Deep Brown.


Theme scope note: the homepage keeps its original pre–Golden Hour theme; the five standalone portfolio/video pages use the Golden Hour palette.
