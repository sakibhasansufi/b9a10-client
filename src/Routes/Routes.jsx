import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import ViewDetail from "../Pages/ViewDetail";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddCraft from "../Pages/AddCraft";
import AllCrafts from "../Pages/AllCrafts";
import MyItem from "../Pages/MyItem";
import PrivateRoute from "./PrivateRoutes";

const routes= createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <Error></Error>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/artData.json')
            },
            {
                path : '/artdata/:id',
                element : <PrivateRoute><ViewDetail></ViewDetail></PrivateRoute>,
                loader : () => fetch('/artData.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/add',
                element : <AddCraft></AddCraft>
            },
            {
                path : '/all',
                element : <AllCrafts></AllCrafts>
            },
            {
                path : '/item',
                element : <MyItem></MyItem>
            }
        ]
    }
]);

export default routes;