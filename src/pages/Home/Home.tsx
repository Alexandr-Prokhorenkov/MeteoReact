import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";
import { useCustomDispath, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thuncks/fetchCurrentWeather";

export const Home: React.FC = () => {
  const dispath = useCustomDispath();

  const  weather  = useCustomSelector(
    (state) => state.currentWeatherSliceReducer.weather
  );

  useEffect(() => {
    dispath(fetchCurrentWeather("Moscow"));
    
  }, [dispath]);

  return (
    <div className={styles.home}>
      <div className={styles.wrapperTop}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
