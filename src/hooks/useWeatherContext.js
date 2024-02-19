import { useContext } from "react";

import { WeatherContext } from "../context";

const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export default useWeatherContext;
