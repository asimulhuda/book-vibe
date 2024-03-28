import ListedBooksHero from "../components/ListedBooksHero";
import ListedBooksTab from "../components/ListedBooksTab";

const ListedBooks = () => {
  return (
    <div className="flex flex-col space-y-6">
      <ListedBooksHero></ListedBooksHero>
      <ListedBooksTab></ListedBooksTab>
    </div>
  );
};

export default ListedBooks;
