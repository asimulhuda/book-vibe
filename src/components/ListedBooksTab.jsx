import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useLocalStorage from "../hooks/useLocalStorage";
import ReadBookTab from "./ReadBookTab";

const ListedBooksTab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
      </TabList>
      <TabPanel>
        <ReadBookTab></ReadBookTab>
      </TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
  );
};

export default ListedBooksTab;
