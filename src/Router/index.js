import { createBrowserRouter } from "react-router-dom";
import { About, Home } from "../Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
]);

export default router;