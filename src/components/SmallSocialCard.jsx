import React from "react";
import classes from "./SmallSocialCard.module.css";
import { useTheme } from "../context/ThemeContext";
const SmallSocialCard = ({
  title,
  plateformIcon,
  views,
  percentage,
  percentageIcon,
}) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={darkMode ? `${classes.dark} ${classes.card}` : classes.card}
    >
      <div className={classes.top}>
        <span>{title}</span>
        <img src={plateformIcon} alt={title} />
      </div>
      <div className={classes.bottom}>
        <span>{views}</span>
        <span>
          <img src={percentageIcon} alt={views} />
          <span>{percentage}</span>
        </span>
      </div>
    </div>
  );
};

export default SmallSocialCard;
