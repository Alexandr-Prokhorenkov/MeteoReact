import React from "react";
import styles from "./Days.module.scss";

type ITab = {
  value: string;
};

export const Tabs: React.FC = () => {
  const tabs: ITab[] = [
    { value: "На неделю" },
    { value: "На 10 дней" },
    { value: "На месяц" },
  ];
  return (
    <div className={styles.tabs}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <div key={tab.value} className={styles.tab}>
            {tab.value}
          </div>
        ))}
      </div>
      <button className={styles.tabButton}>Отменить</button>
    </div>
  );
};
