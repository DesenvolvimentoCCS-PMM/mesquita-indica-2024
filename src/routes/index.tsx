import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Congratulations } from "../pages/congratulations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/agradecimentos",
    element: <Congratulations />,
  },
]);

export function Routing() {
  return <RouterProvider router={router} />;
}
