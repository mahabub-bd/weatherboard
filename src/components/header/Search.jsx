import { useDebounce, useLocationContext } from "../../hooks";
import { getLocationByName } from "../../utility";

export default function Search() {
  const { setSelectedLocation } = useLocationContext();

  const doSearch = useDebounce((term) => {
    const fetchLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchLocation });
  }, 1000);

  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          onChange={handleChange}
          placeholder="Search Location"
          required
        />
      </div>
    </form>
  );
}
