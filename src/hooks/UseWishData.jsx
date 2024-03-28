import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/localStorage";
import { getWishCardFromLocalStorage } from "../utils/wishListStorage";

const UseWishData = () => {
  const [wishData, setWishData] = useState([]);
  useEffect(() => {
    setWishData(getWishCardFromLocalStorage());
  }, []);
  return { wishData };
};

export default UseWishData;
