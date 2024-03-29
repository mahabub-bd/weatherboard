import { MapIcon } from "../../constants/images";
import { useWeatherContext } from "../../hooks";
import { getFormattedDate, getWeatherIcon } from "../../utility";

export default function WeatherHeadline() {
  const { weatherData } = useWeatherContext();
  const { temperature, location, time, climate } = weatherData;

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
            <h2 className="text-2xl lg:text-[40px] ">{location}</h2>
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
