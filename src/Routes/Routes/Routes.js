import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import OrderItems from "../../Pages/OrderItems/OrderItems/OrderItems";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/orderItems/:id',
                element: <OrderItems></OrderItems>,
                loader: ({params}) => fetch(`http://localhost:5000/catalog/${params.id}`)
            }
        ]

    }
])