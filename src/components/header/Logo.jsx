import { Logomain } from "../../constants/images";

export default function Logo() {
  return (
    <a href="./index.html">
      <img className="h-9" src={Logomain} alt="Weather App" />
    </a>
  );
}
