"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("dark");

  useEffect(() => {
    // Sync with what the anti-flash script already applied
    const current = document.documentElement.getAttribute("data-theme");
    setThemeState(current === "light" ? "light" : "dark");

    // React to OS theme changes only when user hasn't manually overridden
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onOsChange = (e) => {
      if (!localStorage.getItem("ghubor-theme")) {
        applyTheme(e.matches ? "dark" : "light");
        setThemeState(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", onOsChange);
    return () => mq.removeEventListener("change", onOsChange);
  }, []);

  const applyTheme = (t) => {
    if (t === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    applyTheme(next);
    localStorage.setItem("ghubor-theme", next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
