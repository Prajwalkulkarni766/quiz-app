import React, { createContext, useState } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { lightTheme, darkTheme } from "../theme/themeConfig";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  // const [mode, setMode] = useState(() => {
  //   return localStorage.getItem("theme") || "light";
  // });

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  const currentThemeConfig = mode === "dark"
    ? { ...darkTheme, algorithm: antdTheme.darkAlgorithm }
    : { ...lightTheme, algorithm: antdTheme.defaultAlgorithm };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ConfigProvider theme={currentThemeConfig}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
