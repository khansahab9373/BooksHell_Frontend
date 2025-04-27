// src/components/ThemeToggle.jsx
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      onClick={toggleTheme}
      className="w-16 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all duration-300"
    >
      <div
        className={`w-6 h-6 bg-white dark:bg-yellow-500 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {theme === "light" ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-gray-800" />
        )}
      </div>
    </div>
  );
}

export default ThemeToggle;
