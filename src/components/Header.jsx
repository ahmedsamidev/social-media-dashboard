import React, { useState } from "react";
import classes from "./Header.module.css";
import { useTheme } from "../context/ThemeContext";
const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <header
      className={
        darkMode ? ` ${classes.dark} ${classes.header}` : classes.header
      }
    >
      <div>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div>
        <span>Dark Mode</span>
        <span
          onClick={toggleTheme}
          className={
            darkMode ? ` ${classes.toggle} ${classes.dark}` : classes.toggle
          }
        >
          <i></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
