import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";
import { useCustomDispath, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thuncks/fetchCurrentWeather";
import { selectCurrentWeatherData } from "../../store/selectors";
import { fetchWeatherForecast } from "../../store/thuncks/weatherThunks";

export const Home: React.FC = () => {
  const dispatch = useCustomDispath();

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather("Moscow"));
    dispatch(fetchWeatherForecast("Moscow", 7));
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.wrapperTop}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Days />
    </div>
  );
};
