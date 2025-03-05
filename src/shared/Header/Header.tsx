import React from "react";
import styles from "./Header.module.scss";
import { GlobalSvgSelector } from "../../assets/images/icons/GlobalSvgSelector";
import Select, { StylesConfig } from "react-select";

export const Header: React.FC = () => {
  const options = [
    { value: "Moscow", label: "Москва" },
    { value: "Rostov", label: "Ростов" },
    { value: "Krasnodar", label: "Краснодар" },
  ];

  const coloursStyles: StylesConfig<{ value: string; label: string }, false> = {
    control: (styles) => ({...styles, backgroundColor: '#4793FF33', width:'194px', height:'37px', border: 'none', borderRadius:'10px'})
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
        <div className={styles.changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <div className={styles.select}>
          <Select defaultValue={options[0]} styles={coloursStyles} options={options} />
        </div>
      </div>
    </header>
  );
};
