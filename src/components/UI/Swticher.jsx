/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../../hooks/useDarkMode";

export default function Switcher({ className }) {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <div className={className}>
      <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={24} />
    </div>
  );
}
