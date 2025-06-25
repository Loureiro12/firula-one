import { useState } from "react";

export const useMetrics = () => {
  const [selectedTab, setSelectedTab] = useState("day");

  const tabItems = [
    { label: "Dia", value: "day" },
    { label: "Semana", value: "week" },
    { label: "Mês", value: "month" },
    { label: "Ano", value: "year" },
  ];

  return {
    tabItems,
    selectedTab,
    setSelectedTab,
  };
}