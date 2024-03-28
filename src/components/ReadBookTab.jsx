import useLocalStorage from "../hooks/useLocalStorage";
import ReadBookCard from "./ReadBookCard";

const ReadBookTab = () => {
  const { localData } = useLocalStorage();
  return (
    <div className="flex flex-col space-y-6 mt-8 mb-24">
      {localData.map((readBook) => (
        <ReadBookCard key={readBook.id} readBook={readBook} />
      ))}
    </div>
  );
};

export default ReadBookTab;
