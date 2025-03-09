import React from "react";
import styles from "./Header.module.scss";
import { GlobalSvgSelector } from "../../assets/images/icons/GlobalSvgSelector";
import Select, { StylesConfig } from "react-select";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/themeContext";
import { setCity } from "../../store/slices/currenWeatherSlice";
import { useCustomDispath, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thuncks/fetchCurrentWeather";
import { fetchWeatherForecast } from "../../store/thuncks/weatherThunks";
import { options } from "../constants";

export const Header: React.FC = () => {
  const theme = useTheme();
  const dispatch = useCustomDispath();
  const selectedCity = useCustomSelector(
    (state) => state.currentWeatherSliceReducer.city
  );

  const coloursStyles: StylesConfig<{ value: string; label: string }, false> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 
        theme.theme === Theme.LIGHT ? "#4793FF33" : "rgba(79, 79, 79, 1)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.theme === Theme.LIGHT ? "#000" : "#FFF",
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.LIGHT ? "#dae9ff" : "rgba(79, 79, 79, 1)",
      color: theme.theme === Theme.LIGHT ? "#000" : "#FFF",
    }), 
    option: (provided, state) => ({
      ...provided,
      backgroundColor: theme.theme === Theme.LIGHT
      ? (state.isFocused ? '#b4d1fc' : '#dae9ff')
      : (state.isFocused ? '#5a5a5a' : 'rgba(79, 79, 79, 1)'),
      color: theme.theme === Theme.LIGHT ? "#000" : "#FFF",
    }),
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const handleCityChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    if (selectedOption) {
      dispatch(setCity(selectedOption.value));
      dispatch(fetchCurrentWeather(selectedOption.value));
      dispatch(fetchWeatherForecast(selectedOption.value, 7));
    }
  };

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
            value={options.find((opt) => opt.value === selectedCity)}
            styles={coloursStyles}
            options={options}
            onChange={handleCityChange}
          />
        </div>
      </div>
    </header>
  );
};
