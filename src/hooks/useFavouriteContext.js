import { useContext } from "react";
import { FavouriteContext } from "../context";

const useFavouriteContext = () => {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error("useFavouriteContext must be used within a TaskProvider");
  }
  return context;
};

export default useFavouriteContext;
