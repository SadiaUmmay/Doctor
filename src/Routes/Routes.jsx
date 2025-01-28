import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Contact from "../Pages/Contact/Contact";
import Reviews from "../Pages/Reviews/Reviews";


const Router = createBrowserRouter( [
        {
            path:"/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path:"about",
                    element: <About></About>
                },
                {
                    path:"appoinment",
                    element: <Appoinment></Appoinment>
                },
                {
                    path:"contact",
                    element: <Contact></Contact>
                },
                {
                    path:"reviews",
                    element: <Reviews></Reviews>
                }
            ]
        }
    ]
)
export default Router;







