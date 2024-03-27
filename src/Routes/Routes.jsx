import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import PageToRead from "../pages/PageToRead";
import ErrorPage from "../pages/ErrorPage";
import ListedBooks from "../pages/ListedBooks";
import BookDetails from "../pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
      },
      {
        path: "/pagetoread",
        element: <PageToRead />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
    ],
  },
]);

export default router;
