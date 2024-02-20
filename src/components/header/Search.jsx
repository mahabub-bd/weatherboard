import { useState } from "react";
import { SearchBox } from "../../constants/images";
import { getLocationByName } from "../../data/locationData";
import { useLocationContext } from "../../hooks";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useLocationContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchLocation = getLocationByName(searchTerm);
    setSelectedLocation({ ...fetchLocation });
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={SearchBox} />
        </button>
      </div>
    </form>
  );
}
