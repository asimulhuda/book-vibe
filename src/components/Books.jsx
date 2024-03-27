import UseBooksData from "../hooks/UseBooksData";
import SingleBook from "./SingleBook";

const Books = () => {
  const { data, loading } = UseBooksData();

  return (
    <div className="lg:my-[90px] my-6">
      <h2 className="text-[40px] font-bold text-center mb-10">Books</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {data.map((book) => (
          <SingleBook key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
