import { useEffect, useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, seterror] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Weather Data ...",
      });
      console.log(import.meta.env.VITE_WEATHER_API_KEY);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed :${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const updateWeaturedata = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: data?.coord?.lon,
        latitude: data?.coord?.lat,
      };

      setWeatherData(updateWeaturedata);
    } catch (err) {
      seterror(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLoading({
        ...loading,
        state: true,
        message: "Finding Weather Data ...",
      });
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return {
    weatherData,
    loading,
    error,
  };
};

export { useWeather };
