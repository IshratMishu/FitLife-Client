import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import AllService from "../Pages/AllService/AllService";
import ViewDetail from "../Pages/ViewDetail/ViewDetail";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService/AddService";
import BookNow from "../Pages/BookNow/BookNow";
import BookedServices from "../Pages/BookedServices/BookedServices";
import ManageServices from "../Pages/ManageServices/ManageServices";
import UpdateService from "../Pages/ManageServices/UpdateService";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/fitness')
            },
            {
                path: "/allService",
                element: <AllService></AllService>,
                loader: () => fetch('http://localhost:5000/fitness')
            },
            {
                path: "/viewDetail/:id",
                element: <PrivateRoute><ViewDetail></ViewDetail></PrivateRoute>,
            },
            {
                path: "/addService",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
                path: "/bookNow/:id",
                element: <PrivateRoute><BookNow></BookNow></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/fitness/${params.id}`)
            },
            {
                path: "/bookedService",
                element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
            },
            {
                path: "/manageService",
                element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
            },
            {
                path: "/updateService/:id",
                element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/fitness/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
        ],
    },
]);

export default Router;