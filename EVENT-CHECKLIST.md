# SPARKS26 — assets and final details

## Named placeholders
The app currently uses neutral initials portraits, not real photos. Each placeholder is stored as a CDN asset pointer with its original filename preserved. Upload replacements in chat with these names:

- `logo.png` — the unmodified official SPARKS26 logo. A neutral `logo.png` placeholder is prepared; text identification remains on the site until the official asset is supplied.
- `intro.mp4` — the official introduction video. The configured slot is `/videos/intro.mp4`; the site displays a non-playing introduction placeholder until a real video is supplied. No fake or empty MP4 is created.
- Organizer photos: `kanish-s.jpg`, `sarvesh-p.jpg`, `ajay.jpg`, `nithish.jpg`, `dev.jpg`, `elango.jpg`, `nithyasri.jpg`, `kamesh.jpg`, `raaj-nikitaa.jpg`, `kamali.jpg`, `kavyashree.jpg`, `sridevi.jpg`, `srinivasan-m.jpg`, `sudhish-vijai.jpg`.

For real portrait replacements, update the image pointer and set `imageIsPlaceholder` to false. The fallback still works when an image cannot load.

## Details still needed
- Official registration URL, whether registration is open/closed, and deadline.
- Official start and end times in IST, check-in time, and approved schedule.
- Exact campus venue or room.
- Approved tracks and problem statements.
- Eligibility, team size, registration fee (or confirmation that it is free).
- Required equipment, submission format, judging criteria, and participation rules.
- Organizer designations, departments, and optional approved biographies/contact links.
- Official event email, phone, and social links.
- Official AJ STUDIOZ website URL for the credit link.
- Prize/sponsor details only if applicable and officially confirmed; otherwise these stay omitted.

Confirmed already: October 15, 2026; Sona College of Technology, Salem; all 14 organizer names. Unknown details remain marked as pending in the site.