import { useParams } from "react-router-dom";
import UseBooksData from "../hooks/UseBooksData";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";

const BookDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const { data, loading } = UseBooksData();

  useEffect(() => {
    const singleData = data.find((item) => item.id == id);
    setSingleData(singleData);
  }, [data, id]);
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleData || {};
  return (
    <div className="my-6 lg:flex flex-row space-y-6 gap-12">
      <div className="p-[74px] bg-[#f3f3f3] rounded-2xl w-full">
        <img className="lg:w-[400px] w-full" src={image} alt="" />
      </div>
      <div className="space-y-5 w-full">
        <div className="text-[#131313CC] space-y-5 pb-12">
          <h3 className="text-[40px] font-bold text-[#131313]">{bookName}</h3>
          <h4 className="text-xl font-medium">By: {author}</h4>
          <p className="text-xl font-medium py-4 border-y-[1px] border-[#13131326]">
            {category}
          </p>
          <p>
            <span className="font-bold">Review: </span> {review}
          </p>
        </div>
        <div className="space-y-5 text-[#131313CC]">
          <div className="flex gap-3 items-center pb-6 border-b-[1px] border-[#13131326] ">
            {" "}
            <span className="font-bold">Tag </span>
            {Array.isArray(tags) &&
              tags.map((tag) => (
                <h6
                  key={tag}
                  className="font-medium text-[#23BE0A] px-4 py-2 rounded-[30px] bg-[#23BE0A0D]"
                >
                  {tag}
                </h6>
              ))}
          </div>
          <table>
            <tbody className="">
              <tr className="*:pr-10">
                <td>Number of Pages:</td>
                <td className="font-semibold">{totalPages}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td className="font-semibold">{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing:</td>
                <td className="font-semibold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td className="font-semibold">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-4">
          <Button size="lg" variant="outlined">
            <span>Read</span>
          </Button>
          <Button size="lg" className="bg-[#50B1C9]">
            <span>Wishlist</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
