import { useContext } from "react";
import { LocationContext } from "../context";

const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation Context must be used within a TaskProvider");
  }
  return context;
};

export default useLocationContext;
