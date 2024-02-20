import {
  ClearSkyImage,
  CloudIcon,
  FewCloudsImage,
  HazeIcon,
  RainIcon,
  RainyDayImage,
  ScatterdCloudImage,
  SnowIcon,
  SnowImage,
  SunnyIcon,
  ThunderIcon,
  ThunderStormImage,
  WinterImage,
} from "../constants/images";

import { data } from "../data/locationData";

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

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

function getBackgroundImage(climate) {
  switch (climate) {
    case "Rain":
      return RainyDayImage;
    case "Clouds":
      return ScatterdCloudImage;
    case "Snow":
      return SnowImage;
    case "Clear":
      return ClearSkyImage;
    case "Haze":
      return FewCloudsImage;

    case "Fog":
      return WinterImage;

    case "Thunder":
      return ThunderStormImage;
    default:
      return ClearSkyImage;
  }
}

function getFormattedDate(value, type, inMS) {
  if (!type) return value;

  if (!inMS) {
    value = value * 1000;
  }

  const date = new Date(value);
  let options;
  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
}

export {
  getBackgroundImage,
  getFormattedDate,
  getLocationByName,
  getLocations,
  getWeatherIcon,
};
