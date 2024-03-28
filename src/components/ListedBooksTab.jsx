import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishlistCard from "./WishlistCard";
import useLocalStorage from "../hooks/useLocalStorage";
import ReadBookCard from "./ReadBookCard";
import UseWishData from "../hooks/UseWishData";

const ListedBooksTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { localData } = useLocalStorage();
  const { wishData } = UseWishData();

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
      </TabList>
      <TabPanel className="flex flex-col space-y-6 my-8">
        {localData.map((readBook) => (
          <ReadBookCard key={readBook.id} readBook={readBook} />
        ))}
      </TabPanel>
      <TabPanel className="flex flex-col space-y-6 my-8">
        {wishData.map((WishCard) => (
          <WishlistCard key={WishCard.id} WishCard={WishCard} />
        ))}
      </TabPanel>
    </Tabs>
  );
};

export default ListedBooksTab;
