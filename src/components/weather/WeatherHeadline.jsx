import { CloudIcon, MapIcon } from "../../constants/images";
import { timeStamp } from "../../utility/timeStamp";

export default function WeatherHeadline({ data }) {
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={CloudIcon} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {`${data.temperature}°`}
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={MapIcon} />
            <h2 className="text-2xl lg:text-[50px]">{data.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">{timeStamp(`${data.time}`)}</p>
    </div>
  );
}
