# Jılmay 😊

Irad's marketplace, a lalafo-style classifieds site where everything is emoji themed.

- `index.html` is the page: header with search, emoji category tiles, city filter, listing grid, the Jılmay Cargo page, and the login modal.
- `data.js` holds the categories, cities and listings. Add or edit listings there; prices are in som unless a listing has `cur: "usd"` (rate 8.40 som = $1, set in `rate`), `p: null` means "Negotiable" and `p: 0` means "Free". Cars, property and big items are in dollars; Jılmay Cargo is dollars only.
- Listings can have a photo: `img: "img/listings/<name>.jpg"` (JPEG, about 800 px on the long side, phone numbers cropped or blurred out). Listings without one show their emoji `e` on a pastel tile, as most sellers don't bother with photos. The emoji is still needed on photo listings.
- `app.js` handles search, filters, the cargo calculator and the login loop.
- `styles.css` is all the styling.

## How it behaves

- Search and the category and city filters work, and the state lives in the URL (`#/?cat=horses&city=Talas&q=saddle`).
- Clicking any listing, the heart, "Post an ad" or "Log in" opens the login prompt.
- Every password is wrong. The site then moves you to the forgotten password form, every email address is invalid, and you are sent back to the login prompt. Registering says the account already exists and sends you back to log in.
- `#cargo` is Jılmay Cargo, the service that receives parcels in Bishkek and trucks them to addresses in Irad.

No build step. It runs as a static site on GitHub Pages: in the repo settings, under Pages, deploy from the `main` branch root.

## Welcome popups

On the first visit of each browser session, three AliExpress-style popups are stacked over the page and must be closed one by one:

1. **Ship to:** a country picker that never lists Irad ("Other / not listed" says delivery isn't available).
2. **New user coupons:** a countdown that never runs out; its close button only appears after a couple of seconds and is tiny.
3. **Lucky horse wheel:** always lands on the horse ("a FREE HORSE!**, horse not included").

They're remembered for the session in `sessionStorage` (`jl_promos_seen`). Add `#promos` to the address to see them again.

## Languages

The Iradi, Russian and English buttons switch the whole interface (menus, categories, cities, prices and dates, the cargo page, the login loop, About and Rules, and the popups). The text lives in `i18n.js`, one block per language. Iradi uses its Kyrgyz-based Latin alphabet. Listings aren't translated: they stay as their sellers wrote them. The choice is remembered per browser (`localStorage`, `jl_lang`). Search also matches category and city names in all three languages.

## Feedback bar

Four seconds after the welcome popups are closed, a bar slides up from the bottom asking "Do you like your recommended listings?" with five emoji faces (😡 🙁 😐 🙂 😍). Every answer, good or bad, is thanked with a promise to show more horses. Once per session (`jl_rate_seen`); `#promos` resets it too.
