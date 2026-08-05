export type Theme = "dark" | "light";

const STORAGE_KEY = "av-theme";
const THEME_EVENT = "av-theme-change";

/**
 * Inline script injected into <head> so the theme is applied before the
 * first paint. Dark is the default experience; a previously stored
 * "light" preference is respected. Wrapped in try/catch for storage-
 * restricted contexts.
 */
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");var d=t?t==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`;

/** Reads the current theme from the DOM. */
export function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

/** Applies a theme and persists it, notifying subscribers. */
export function setTheme(theme: Theme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage unavailable — theme still applies for this session */
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

/** Subscribe to theme changes (for useSyncExternalStore). */
export function subscribeTheme(callback: () => void): () => void {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}
