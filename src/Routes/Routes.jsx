import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import PageToRead from "../pages/PageToRead";
import ErrorPage from "../pages/ErrorPage";
import ListedBooks from "../pages/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagetoread",
        element: <PageToRead></PageToRead>,
      },
    ],
  },
]);

export default router;
