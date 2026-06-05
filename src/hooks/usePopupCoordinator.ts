// Coordinates multiple popups so they never overlap and respect a cooldown.
const ACTIVE_KEY = "popup_active";
const LAST_CLOSED_KEY = "popup_last_closed_at";
const CONVERTED_KEY = "popup_converted";
const COOLDOWN_MS = 60_000;

export const popupCoordinator = {
  canShow(id: string): boolean {
    if (typeof window === "undefined") return false;
    if (sessionStorage.getItem(CONVERTED_KEY)) return false;
    const active = sessionStorage.getItem(ACTIVE_KEY);
    if (active && active !== id) return false;
    const last = Number(sessionStorage.getItem(LAST_CLOSED_KEY) || 0);
    if (last && Date.now() - last < COOLDOWN_MS) return false;
    return true;
  },
  open(id: string) {
    sessionStorage.setItem(ACTIVE_KEY, id);
  },
  close(id: string) {
    const active = sessionStorage.getItem(ACTIVE_KEY);
    if (active === id) sessionStorage.removeItem(ACTIVE_KEY);
    sessionStorage.setItem(LAST_CLOSED_KEY, String(Date.now()));
  },
  markConverted() {
    sessionStorage.setItem(CONVERTED_KEY, "true");
  },
};
