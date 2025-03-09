import React, { useEffect, useState } from "react";
import styles from "./Days.module.scss";
import { useCustomDispath, useCustomSelector } from "../../../../hooks/store";
import { selectCurrentWeatherData } from "../../../../store/selectors";
import { fetchWeatherForecast } from "../../../../store/thuncks/weatherThunks";
import { getDaysCount } from "../../../../utils/utils";

type ITab = {
  value: string;
};

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("На неделю");
  const [city, setCity] = useState<string>("Москва");
  const dispatch = useCustomDispath();
  const { city: selectedCity  } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    if (selectedCity !== city) {
      setCity(selectedCity);
      dispatch(fetchWeatherForecast(selectedCity, getDaysCount(activeTab)));
    }
  }, [selectedCity, city, dispatch, activeTab]);

  const tabs: ITab[] = [
    { value: "На неделю" },
    { value: "На 10 дней" },
    { value: "На две недели" },
  ];

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
    if (tabValue === "На неделю") {
      dispatch(fetchWeatherForecast(city, 7));
    }
    if (tabValue === "На 10 дней") {
      dispatch(fetchWeatherForecast(city, 10));
    }
    if (tabValue === "На две недели") {
      dispatch(fetchWeatherForecast(city, 14));
    }
  };

  const handleReset = () => {
    setActiveTab("На неделю");
    dispatch(fetchWeatherForecast(city, 7));
  };


  return (
    <div className={styles.tabs}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <div
            tabIndex={0}
            key={tab.value}
            className={`${styles.tab} ${
              tab.value === activeTab ? styles.active : ""
            }`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.value}
          </div>
        ))}
      </div>
      <button className={styles.tabButton} onClick={handleReset}>Отменить</button>
    </div>
  );
};
