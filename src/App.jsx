import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
    HomeLayout,
    Landing,
    Login,
    Cart,
    SingleProduct,
    Products,
    Error,
    About,
    Register,
    Checkout,
    Orders,
} from "./pages";

import { store } from "./store";
import { ErrorElement } from "./components";

import { loader as landingLoader } from "./loaders/productsFeaturedLoader";
import { loader as singleProductLoader } from "./loaders/SingleProductLoader";
import { loader as productLoader } from "./loaders/productsLoader";

import { registerAction } from "./actions/registerAction";
import { loginAction } from "./actions/loginAction";
import { checkoutLoader } from "./loaders/checkoutLoader";
import { checkoutAction } from "./actions/checkoutAction";
import { ordersLoader } from "./loaders/ordersLoader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                loader: landingLoader,
                errorElement: <ErrorElement />,
            },
            {
                path: "products",
                loader: productLoader,
                element: <Products />,
                errorElement: <ErrorElement />,
            },
            {
                path: "products/:id",
                loader: singleProductLoader,
                element: <SingleProduct />,
                errorElement: <ErrorElement />,
            },
            {
                path: "cart",
                element: <Cart />,
                errorElement: <ErrorElement />,
            },
            {
                path: "about",
                element: <About />,
                errorElement: <ErrorElement />,
            },
            {
                path: "checkout",
                element: <Checkout />,
                loader: checkoutLoader(store),
                action: checkoutAction(store),
                errorElement: <ErrorElement />,
            },
            {
                path: "orders",
                element: <Orders />,
                loader: ordersLoader(store),
                errorElement: <ErrorElement />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
        action: loginAction(store),
    },
    {
        path: "/register",
        element: <Register />,
        action: registerAction,
        errorElement: <Error />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
