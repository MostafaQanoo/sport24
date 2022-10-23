import { createBrowserRouter } from "react-router-dom";
import { Layout, Home } from "../Pages";
import MatchOverview from "./../Pages/MatchOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "match/:id",
        element: <MatchOverview />,
      },
    ],
  },
]);

export default router;
