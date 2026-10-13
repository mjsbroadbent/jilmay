# Jılmay 😊

Irad's marketplace, a lalafo-style classifieds site where everything is emoji themed.

- `index.html` is the page: header with search, emoji category tiles, city filter, listing grid, the Jılmay Cargo page, and the login modal.
- `data.js` holds the categories, cities and listings. Add or edit listings there; prices are in som (5 som = $1), `p: null` means "Negotiable" and `p: 0` means "Free".
- `app.js` handles search, filters, the cargo calculator and the login loop.
- `styles.css` is all the styling.

## How it behaves

- Search and the category and city filters work, and the state lives in the URL (`#/?cat=horses&city=Talas&q=saddle`).
- Clicking any listing, the heart, "Post an ad" or "Log in" opens the login prompt.
- Every password is wrong. The site then moves you to the forgotten password form, every email address is invalid, and you are sent back to the login prompt. Registering says the account already exists and sends you back to log in.
- `#cargo` is Jılmay Cargo, the service that receives parcels in Bishkek and trucks them to addresses in Irad.

No build step. It runs as a static site on GitHub Pages: in the repo settings, under Pages, deploy from the `main` branch root.
