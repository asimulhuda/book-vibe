import { toast } from "react-toastify";

export const saveWishCardToLocalStorage = (data) => {
  const saveWishData = JSON.parse(localStorage.getItem("book")) || [];
  const existedData = saveWishData.find((item) => item.id == data.id);
  if (!existedData) {
    saveWishData.push(data);
    localStorage.setItem("book", JSON.stringify(saveWishData));
    toast.success("Book added on the list");
  } else {
    toast.warn("It's already been added");
  }
};

export const getWishCardFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("book")) || [];
  return data;
};
