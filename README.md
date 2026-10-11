# Baze Learning Lab

A free, accessible, static landing page for the educational apps made by Christopher Bazemore.

## Launch on GitHub Pages

1. Create a **public** repository named `Baze-Learning-Lab` under `bazeocrisy` on GitHub. Don't add a template or starter README.
2. Upload `index.html`, `styles.css`, `script.js`, `favicon.svg`, and this README to the root of the new repository (or push with git).
3. In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, `main`, and `/ (root)`, then save.
4. GitHub should serve the site at `https://bazeocrisy.github.io/Baze-Learning-Lab/` after publishing completes. Do not assume it's live until the Pages deployment reports success.

### Git command alternative

```bash
git init
git add .
git commit -m "Launch community app hub"
git branch -M main
git remote add origin https://github.com/bazeocrisy/Baze-Learning-Lab.git
git push -u origin main
```

## Edit your apps

Update the `apps` array at the top of `script.js`. Categories: `math`, `reading`, `language`. Each app has a link and action. Use a live app address when verified; otherwise link to the code repository as shown. Keep only apps you are comfortable presenting publicly.

## Customize the site

- Site name: currently **Baze Learning Lab**; replace text if you choose a new name.
- Creator bio: edit the About section in `index.html`.
- Portrait: `PHOTO COMING SOON` is a placeholder; replace with a photo you approve for public use.
- Colors and type: edit `styles.css`.
- Typography loads from Google Fonts and falls back to system fonts if blocked/offline.

## Maintenance and privacy

The site is static: no account system, tracking scripts, analytics, back-end, or contact form. The landing page doesn't collect personal information. Individual linked apps may have different behavior; audit them before making privacy promises about them. Avoid listing children's full names or other identifying details.

## Quick quality checks

Check mobile (320–430px), tablet (768px), desktop (1280px); keyboard navigation and focus; search and category filters; each app's target URL; and GitHub Pages paths after deploying. Link checks have not been independently verified for every app.