import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Register } from "../pages/register";
import { Voting } from "../pages/voting";
import { Login } from "../pages/login";
import { Congratulations } from "../pages/congratulations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastrar",
    element: <Register />,
  },
  {
    path: "/entrar",
    element: <Login />,
  },
  {
    path: "/votar",
    element: <Voting />,
  },
  {
    path: "/agradecimentos",
    element: <Congratulations />,
  },
]);

export function Routing() {
  return <RouterProvider router={router} />;
}
