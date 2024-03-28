import { toast } from "react-toastify";

export const saveWishCardToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem("book")) || [];
  const existedData = savedData.find((item) => item.id == data.id);
  if (!existedData) {
    savedData.push(data);
    localStorage.setItem("book", JSON.stringify(savedData));
    toast.success("Book added on the list");
  } else {
    toast.warn("It's already been added");
  }
};

export const getWishCardFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("book")) || [];
  return data;
};
