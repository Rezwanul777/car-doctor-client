import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import HOME from "../pages/Home/Home/HOME.JSX";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SIGNUP/SignUp";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<HOME></HOME>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        }

      ]
    },
  ]);

  export default router;