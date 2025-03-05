import React from "react";
import styles from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";

export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapperTop}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days/>
    </div>
  );
};
