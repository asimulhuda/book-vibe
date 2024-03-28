import { useEffect, useState } from "react";
import { getWishCardFromLocalStorage } from "../utils/wishListStorage";

const useLocalStorage = () => {
  const [localData, setLocalData] = useState([]);
  useEffect(() => {
    setLocalData(getWishCardFromLocalStorage());
  }, []);
  return { localData };
};

export default useLocalStorage;
