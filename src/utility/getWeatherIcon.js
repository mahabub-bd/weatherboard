import {
  CloudIcon,
  HazeIcon,
  RainIcon,
  SnowIcon,
  SunnyIcon,
  ThunderIcon,
} from "../constants/images";

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

    case "Thunder":
      return ThunderIcon;
    default:
      return SunnyIcon;
  }
}
export { getWeatherIcon };
