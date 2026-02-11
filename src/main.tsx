// ⭐ GLOBAL FIX FOR PUBLIC FILES ON GITHUB PAGES
const base = import.meta.env.BASE_URL;

const originalOpen = window.open;
window.open = function (url, ...args) {
  if (typeof url === "string" && !url.startsWith("http")) {
    url = base + url.replace(/^\/+/, "");
  }
  return originalOpen.call(window, url, ...args);
};
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
