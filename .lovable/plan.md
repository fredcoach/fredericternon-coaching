## Objective

Create a dedicated `/signature` page on the site that renders Frédéric's email signature **visually** (not as raw HTML code), so he can select it with Ctrl/Cmd+A, copy, and paste directly into Gmail → Settings → Signature.

## Context

Gmail does not support pasting raw HTML code into the signature field. The only reliable method is to render the signature in a browser, select the rendered output, copy it, and paste the rich text into Gmail. The previous attempt using a local file (`file:///mnt/documents/...`) failed because the file is on the sandbox, not the user's machine.

## Deliverables

1. **New page `src/pages/Signature.tsx`**
   - Renders the signature using the same inline styles as the email HTML (table layout, navy + gold colors, clickable links)
   - Displays on a clean white background for easy selection
   - Uses the brand colors: navy `#0f1b3d`, gold `#b8923d`
   - Content:
     - **Frédéric TERNON** (bold, 15px, navy)
     - *Performance humaine & Pilotage* (13px)
     - *Conférencier* (italic, 12px, muted)
     - Separator line
     - 📞 07 67 97 19 52 (clickable `tel:` link)
     - 💬 WhatsApp (clickable `wa.me/33767971952` link)
     - 🎯 **Guide gratuit — Sortir de la roue du hamster** (gold link to `/ressources`)
     - 🌐 alphadirigeant.solutions (gold link)

2. **Route registration in `src/App.tsx`**
   - Add `<Route path="/signature" element={<Signature />} />`

3. **Meta tag**
   - No-index the page via `<Helmet>` (not useful for SEO, internal tool only)

## How the user will use it

1. Open `https://alphadirigeant.solutions/signature` (or the preview URL)
2. Select the entire signature area
3. Copy (Ctrl/Cmd+C)
4. Open Gmail → Settings → Signature
5. Paste — Gmail preserves colors, links, and formatting

## No-go

- Do not use a `<textarea>` or display raw HTML code — Gmail users need the *rendered* output
- Do not add the navbar or footer to this page — keep it minimal for clean selection
- Do not use external CSS classes that might not inline correctly when copied