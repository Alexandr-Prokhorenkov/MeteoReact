import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";
import { useCustomDispath, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thuncks/fetchCurrentWeather";
import { selectCurrentWeatherData } from "../../store/selectors";

export const Home: React.FC = () => {
  const dispath = useCustomDispath();

  const { weather }  = useCustomSelector(
    selectCurrentWeatherData
  );

  useEffect(() => {
    dispath(fetchCurrentWeather("Moscow"));

  }, [dispath]);

  return (
    <div className={styles.home}>
      <div className={styles.wrapperTop}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather}/>
      </div>
      <Days />
    </div>
  );
};
