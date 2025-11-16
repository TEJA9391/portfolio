# Tej Tej — Portfolio (React)

This is a Vite + React port of your original static HTML/CSS portfolio.

## What I did
- Converted the single HTML page into React components.
- Moved all CSS into `src/index.css` and kept your original structure.
- Implemented the contact form with React state (no backend) and a simple send simulation.
- Added an assets folder; place your `tej.jpg` there.
- Added a `Navbar` and pages (`Home`, `About`, `Blog`, `Speaking`) to match the screenshot.

## Quick start
1. Install dependencies:

```powershell
cd c:/dreambuilder/react
npm install
# Install router for navigation
npm install react-router-dom
```

2. Start the dev server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
npm run preview
```

## Notes
- Replace `/src/assets/tej.jpg` with your image.
- All styling is in `src/index.css`. Break components into smaller files if you want.
- The `src/pages` folder contains `Home`, `Blog`, `About`, and `Speaking` page components.
