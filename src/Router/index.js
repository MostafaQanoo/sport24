import { createBrowserRouter } from "react-router-dom";
import { Layout, Home, PlayerPage, Leagues } from "../Pages";
import Match from "../Pages/Match";
import {
  MatchOverview,
  MatchFormation,
  MatchEvents,
  MatchStatistics,
} from "../Components/Match";

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
        path: 'player/:id',
        element: <PlayerPage />,
      },
      {
        path: 'league/:id',
        element: <Leagues />,
      },
      {
        path: "match/:id",
        element: <Match />,
        children: [
          {
            index: true,
            element: <MatchOverview />,
          },
          {
            path: "formation",
            element: <MatchFormation />,
          },
          {
            path: "events",
            element: <MatchEvents />,
          },
          {
            path: "statistics",
            element: <MatchStatistics />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Not Found 404 Error</h1>
      </div>
    ),
  },
]);

export default router;
