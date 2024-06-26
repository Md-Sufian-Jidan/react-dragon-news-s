import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path:'/',
                element : <Home />
            },
            {
                path:'/about',
                element : <About />
            },
            {
                path:'/career',
                element : <Career />
            },
        ]
    },
]);

export default router;