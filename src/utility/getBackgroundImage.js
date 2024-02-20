import {
  ClearSkyImage,
  FewCloudsImage,
  RainyDayImage,
  ScatterdCloudImage,
  SnowImage,
  ThunderStormImage,
  WinterImage,
} from "../constants/images";

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
export { getBackgroundImage };
