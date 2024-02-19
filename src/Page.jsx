import { Header } from "./components";
import { WeatherBoard } from "./components/weather";
import { WeatherProvider } from "./provider";

export default function Page() {
  return (
    <WeatherProvider>
      <div className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}
