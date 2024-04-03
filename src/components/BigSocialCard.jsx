import React from "react";
import classes from "./BigSocialCard.module.css";
import { useTheme } from "../context/ThemeContext";
const BigSocialCard = ({
  plateformIcon,
  userName,
  followersNumber,
  dateIcon,
  date,
}) => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div
      className={darkMode ? `${classes.dark} ${classes.card}` : classes.card}
    >
      <div className={classes.top}>
        <img src={plateformIcon} alt="username" />
        <span>{userName}</span>
      </div>
      <div className={classes.middle}>
        <p>{followersNumber}</p>
        <p>Followers</p>
      </div>
      <div className={classes.bottom}>
        <img src={dateIcon} alt={date} />
        <span>{date}</span>
      </div>
    </div>
  );
};

export default BigSocialCard;
