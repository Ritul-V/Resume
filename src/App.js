import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import getRoutes from "./routes";
import "./App.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import ThemeContext from "./theme/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "dark";
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    // Save theme to localStorage
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const routing = useRoutes(getRoutes());
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {routing}
      </ThemeContext.Provider>
    </>
  );
};

export default App;
