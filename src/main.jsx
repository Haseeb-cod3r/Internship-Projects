import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Graduate from "./pages/Graduate.jsx";
import Student from "./pages/Student.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";

import Programs from "./pages/Healthcare.jsx";
import Engineering from "./pages/Engineering.jsx";
import Information from "./pages/Information.jsx";
import { lazy } from "react";
 const About = lazy(() => import("../src/pages/About.jsx"));
 const Privacy = lazy(() => import("../src/pages/Privacy.jsx"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
       index: true, element: <Home />
      },
      {
            path:"graduateprogram",
             errorElement: <Error />,

            children:[
                {
                  index:true, element:<Graduate/>
                },
                {
                  path:"healthcare", element:<Programs/>
                },
                {
                  path:"engineering", element:<Engineering />
                },
                {
                  path:"information", element:<Information />
                }
            ]
      },
      {
            path:"studentambassadors",
            element: <Student />
      },
      {
            path:"privacy",
            element: <Privacy />
      },
      {
            path:"about",
            element: <About />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router = {router}/>);
