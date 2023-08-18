import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import HOME from "../pages/Home/Home/HOME.JSX";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<HOME></HOME>
        }

      ]
    },
  ]);

  export default router;