# Equal Pages — Website

Official website for **Equal Pages**, a Houston-based nonprofit dedicated to putting free, student-selected books in the hands of every child.

Built with **React + Vite + Tailwind CSS**, deployed via **GitHub Pages**.

---

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/events` | Events |
| `/events/:id` | Event Pre-Registration |
| `/get-involved` | Get Involved |
| `/contact` | Contact |

---

## Tech Stack

- **React 18** — UI framework
- **React Router 6** with `HashRouter` — client-side routing (required for GitHub Pages)
- **Vite** — build tool
- **Tailwind CSS 3** — styling
- **Inter** — typography (Google Fonts)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# Open http://localhost:5173
```

---

## Building for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## Deploying to GitHub Pages

### One-time setup

1. **Update the base path** in `vite.config.js`:
   ```js
   base: '/your-repo-name/',
   ```
   Replace `your-repo-name` with the exact name of your GitHub repository.

2. **Create the GitHub repo** if you haven't already.

3. **Install `gh-pages`**:
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Add deploy scripts** to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

5. **Deploy**:
   ```bash
   npm run deploy
   ```

6. In your GitHub repo settings, go to **Pages** → set source to the `gh-pages` branch.

Your site will be live at:
```
https://your-username.github.io/your-repo-name/
```

### Subsequent deploys

```bash
npm run deploy
```

---

## Customization Checklist

Before launch, find and replace all placeholder content:

### Content
- [ ] Replace `[ Founder Name ]` with real name throughout `About.jsx`
- [ ] Replace founder bio placeholders with real text in `About.jsx`
- [ ] Replace `info@equalpages.org` with real email in `Contact.jsx` and `Footer.jsx`
- [ ] Replace `(713) 000-0000` with real phone number in `Contact.jsx`
- [ ] Update social media links in `Navbar.jsx`, `Footer.jsx`, and `Contact.jsx`
- [ ] Add real events to `src/data/events.js`
- [ ] Update 501(c)(3) status in `Contact.jsx` FAQ

### Images
Search for `[ PHOTO PLACEHOLDER ]`, `[ PHOTO: ... ]`, `[ EVENT PHOTO ]` etc. and replace the placeholder `<div>` blocks with real `<img>` elements.

### Donation
- [ ] Replace the `href="#"` on the Donate button in `GetInvolved.jsx` with a real donation link (Donorbox, PayPal Giving Fund, etc.)
- [ ] Remove the `onClick` alert handler once the real link is in place

### Forms
Forms currently `console.log` submissions. Wire them up by:
- **Formspree**: add `action="https://formspree.io/f/YOUR_ID"` to each `<form>`
- **EmailJS**: integrate the EmailJS SDK in each submit handler
- **Custom API**: replace `console.log('...', form)` with a `fetch` call

---

## Project Structure

```
equal-pages/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollReveal.jsx    # Intersection Observer fade-in animation
│   ├── data/
│   │   └── events.js           # All event data lives here
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── EventDetail.jsx     # Per-event pre-registration page
│   │   ├── GetInvolved.jsx
│   │   └── Contact.jsx
│   ├── App.jsx                 # Router setup (HashRouter)
│   ├── main.jsx
│   └── index.css               # Tailwind + reveal animation styles
├── index.html
├── vite.config.js              # ← Update base path here
├── tailwind.config.js
└── package.json
```

---

## Color Reference

| Variable | Hex | Usage |
|---|---|---|
| `navy` | `#1B3A4B` | Primary dark — backgrounds, text |
| `brand-green` | `#2D9B6F` | Accent — CTAs, highlights |
| `brand-green-light` | `#E8F7F1` | Light tint — card backgrounds, badges |
| `navy-light` | `#EEF2F5` | Section backgrounds |
