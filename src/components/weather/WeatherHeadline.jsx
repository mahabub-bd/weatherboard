import {
  CloudIcon,
  HazeIcon,
  MapIcon,
  RainIcon,
  SnowIcon,
  SunnyIcon,
  ThunderIcon,
} from "../../constants/images";
import { useWeatherContext } from "../../hooks";
import { getFormattedDate } from "../../utility/formattedDate";

export default function WeatherHeadline() {
  const { weatherData } = useWeatherContext();
  const { temperature, location, time, climate } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Snow":
        return SnowIcon;
      case "Haze":
        return HazeIcon;
      case "Sunny":
        return SunnyIcon;
      case "Thunder":
        return ThunderIcon;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {`${Math.round(temperature)}°`}
          </h1>

          <div className="flex items-center space-x-4 md:mb-4">
            <img src={MapIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>

      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
}
