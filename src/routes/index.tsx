import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Congratulations } from "../pages/congratulations";
import { Result } from "../pages/result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Result />,
  },
  {
    path: "/agradecimentos",
    element: <Congratulations />,
  },
]);

export function Routing() {
  return <RouterProvider router={router} />;
}
