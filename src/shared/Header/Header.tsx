import React from "react";
import styles from "./Header.module.scss";
import { GlobalSvgSelector } from "../../assets/images/icons/GlobalSvgSelector";
import Select, { StylesConfig } from "react-select";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/themeContext";

export const Header: React.FC = () => {
  const theme = useTheme();

  const options = [
    { value: "Moscow", label: "Москва" },
    { value: "Rostov", label: "Ростов" },
    { value: "Krasnodar", label: "Краснодар" },
  ];

  const coloursStyles: StylesConfig<{ value: string; label: string }, false> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.LIGHT ? "#4793FF33": 'rgba(79, 79, 79, 1)',
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
    }),
    singleValue: (styles) => ({ ...styles, color: theme.theme === Theme.LIGHT ? "#000" : "#FFF" }),
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK: Theme.LIGHT)
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.changeTheme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <div className={styles.select}>
          <Select
            defaultValue={options[0]}
            styles={coloursStyles}
            options={options}
          />
        </div>
      </div>
    </header>
  );
};
