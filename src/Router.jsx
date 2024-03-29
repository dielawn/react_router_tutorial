import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Error from "./Error.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
    },
    {
        path: "/profile/:name",
        element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

