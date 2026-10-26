# Margin architecture

Margin is a Next.js frontend. React state powers editing and interaction, and browser localStorage persists data. No backend service, authentication, database, or cloud storage is required.

## Persistence

- Widget layout, text, images, canvas drawings, hidden widgets, and editable static content use page-specific `margin-*` keys managed by `useGridLayout`.
- Custom pages use `margin-custom-pages`. Deleting a page removes its widget data.
- Calendar and daily agenda share `margin-calendar-events`, with custom colors in `margin-recent-colors`.
- Weekly tasks use `margin-weekly-board` and reset when a new week begins.

Saved data loads before autosave runs. Existing localStorage keys remain compatible. Uploaded images are data URLs and drawings are Fabric.js JSON. Storage is scoped to the browser and origin, with no cross-device synchronization. Browser quota applies to all saved content.

## Running

Run `npm install` and `npm run dev` from `frontend`. Use `npm run build` to validate the production build and `npm start` to serve it.
