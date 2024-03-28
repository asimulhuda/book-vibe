import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const WishlistCard = ({ WishCard }) => {
  const {
    id,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = WishCard || {};
  return (
    <div className="p-6 border-[1px] border-[#13131326] rounded-2xl lg:flex md:flex gap-6 space-y-6">
      <div className="py-[30px] px-12 rounded-2xl bg-[#1313130D] flex justify-center">
        <img className="max-w-32" src={image} alt="" />
      </div>
      <div className=" space-y-6 w-full">
        <div className="space-y-4 pb-6 border-b-[1px] border-[#13131326]">
          <h3 className="text-2xl font-bold">{bookName}</h3>
          <h4 className="font-medium">By: {author}</h4>
          <div className="flex gap-4 items-center">
            <h6 className="font-bold">Tag</h6>
            {tags.map((tag) => (
              <h6
                key={tag}
                className="font-medium text-[#23BE0A] px-4 py-2 rounded-[30px] bg-[#23BE0A0D]"
              >
                #{tag}
              </h6>
            ))}
            <h6 className="flex gap-2 items-center">
              <IoLocationOutline />
              <span>Yea of Publishing: {yearOfPublishing}</span>
            </h6>
          </div>
          <div className="flex gap-6">
            <h6 className="flex gap-2 items-center">
              <GoPeople />
              <span>Publisher: {publisher}</span>
            </h6>
            <h6 className="flex gap-2 items-center">
              <MdOutlineInsertPageBreak />
              <span>Page: {totalPages}</span>
            </h6>
          </div>
        </div>
        <div className="flex gap-3 *:px-5 *:py-[11px] *:rounded-full">
          <h5 className="bg-[#328EFF26] text-[#328EFF]">
            Category: {category}
          </h5>
          <h5 className="bg-[#FFAC3326] text-[#FFAC33]">Rating: {rating}</h5>
          <Link to={`/book-details/${id}`} className="bg-[#23BE0A] text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

WishlistCard.propTypes = {
  WishCard: PropTypes.object,
};

export default WishlistCard;
