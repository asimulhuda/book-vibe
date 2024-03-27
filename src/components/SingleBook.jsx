import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
  const { id, bookName, author, image, rating, category, tags } = book || {};
  return (
    <Link to={`/book-details/${id}`}>
      <div className="p-6 border-[1px] border-[#13131326] rounded-2xl space-y-6">
        <div className="flex justify-center py-8 bg-[#F3F3F3] rounded-2xl">
          <img src={image} alt={bookName} />
        </div>
        <div className="pb-6 border-b-[1px] border-[#13131326] border-dashed space-y-6">
          <div className="flex gap-4">
            {tags.map((tag) => (
              <h6
                key={tag}
                className="font-medium text-[#23BE0A] px-4 py-2 rounded-[30px] bg-[#23BE0A0D]"
              >
                {tag}
              </h6>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{bookName}</h3>
            <h4 className="font-medium">By: {author}</h4>
          </div>
        </div>
        <div className="flex justify-between">
          <p>{category}</p>
          <p className="flex items-center gap-1">
            {rating} <CiStar />
          </p>
        </div>
      </div>
    </Link>
  );
};

SingleBook.propTypes = {
  book: PropTypes.object,
};

export default SingleBook;
