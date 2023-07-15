
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import Request from "./pages/Request";
import View from "./pages/View";
import Admin from "./pages/Admin";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/myaccount",
      element: <MyAccount />,
    },
    {
      path: "/my-request",
      element: <Request/>,
    },
    {
      path: "/my-view",
      element: <View />,
    },
    {
      path: "/admin",
      element: <Admin/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
