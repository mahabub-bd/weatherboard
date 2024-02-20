import { useEffect, useState } from "react";
import { HeartIcon, RedHeartIcon } from "../../constants/images";
import { useFavouriteContext, useWeatherContext } from "../../hooks";

export default function AddToFavourite() {
  const { addToFavourites, removeFromFavourites, favourites } =
    useFavouriteContext();
  const { weatherData } = useWeatherContext();

  const { latitude, longitude, location } = weatherData;
  const [isFavourite, toggleFavourite] = useState(false);

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFavourite(found);
  }, [favourites, location]);

  function handleFavourites() {
    toggleFavourite(!isFavourite);
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="fav" />
        </button>
      </div>
    </div>
  );
}
