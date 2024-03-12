import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Result } from "../pages/result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Result />,
  },
]);

export function Routing() {
  return <RouterProvider router={router} />;
}
