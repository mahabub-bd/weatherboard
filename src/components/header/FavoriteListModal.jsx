import { useFavouriteContext, useLocationContext } from "../../hooks";

export default function FavoriteListModal() {
  const { favourites } = useFavouriteContext();
  const { setSelectedLocation } = useLocationContext();
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16  shadow-lg ">
      <h3 className="text-lg font-bold px-4 text-gray-800  ">
        Favourite Locations
      </h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length > 0 ? (
          favourites.map((fav) => (
            <li key={fav.location}>
              <a onClick={() => setSelectedLocation({ ...fav })}>
                {fav.location}
              </a>
            </li>
          ))
        ) : (
          <p>Nothing to Added </p>
        )}
      </ul>
    </div>
  );
}
