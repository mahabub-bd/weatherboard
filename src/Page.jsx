import { useEffect, useState } from "react";
import { Header } from "./components";
import { WeatherBoard } from "./components/weather";
import { useWeatherContext } from "./hooks";
import { getBackgroundImage } from "./utility";

export default function Page() {
  const [climateImage, setClimateImage] = useState("");
  const { weatherData, loading } = useWeatherContext();
  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 mx-auto w-96  p-10 rounded-md mt-14">
          <p className="text-center text-black text-3xl">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
