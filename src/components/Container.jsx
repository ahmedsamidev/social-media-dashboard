import React from "react";
import classes from "./Container.module.css";
import { useTheme } from "../context/ThemeContext";
export const Container = ({ children }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={
        darkMode ? `${classes.dark} ${classes.container}` : classes.container
      }
    >
      {children}
    </div>
  );
};
export const GridContainer = ({ children }) => {
  return <section className={classes.grid}>{children}</section>;
};
