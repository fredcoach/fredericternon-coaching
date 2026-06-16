## Goal
Force-sync the workspace with GitHub `main`, verify the new route exists, and provide the preview URL.

## Steps (build mode)

1. **Fetch & inspect remote main**
   - `git fetch origin main`
   - `git log --oneline HEAD..origin/main` to see any commits we're missing
   - `git status` to confirm a clean tree

2. **Force-refresh local branch from main** (if commits are missing)
   - Pull/fast-forward `origin/main` into the current edit branch so `src/pages/TestProfilsAlphaPME.tsx` and the route registration land locally

3. **Restart preview** with `code--restart_dev_server` so Vite picks up the synced files

4. **Verify on disk**
   - Confirm `src/pages/TestProfilsAlphaPME.tsx` exists
   - Grep `src/App.tsx` for `test-profils-alpha-pme` and the matching import

5. **Smoke test** with `browser--view_preview` at `/test-profils-alpha-pme`

6. **Report the preview URL**:
   `https://id-preview--eb1b39cd-b9bb-435c-acef-5dcaa227e4a9.lovable.app/test-profils-alpha-pme`

## Notes
- If the branch is already in sync (as last check suggested), step 2 is a no-op and we go straight to verification.
- No file edits planned — read-only verification + dev server restart.

Approve to switch to build mode and run this.