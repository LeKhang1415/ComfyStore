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

import { ErrorElement } from "./components";

import { loader as landingLoader } from "./loaders/productsFeaturedLoader";
import { loader as singleProductLoader } from "./loaders/SingleProductLoader";

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
                element: <Products />,
            },
            {
                path: "products/:id",
                loader: singleProductLoader,
                element: <SingleProduct />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            { path: "about", element: <About /> },
            {
                path: "checkout",
                element: <Checkout />,
            },
            {
                path: "orders",
                element: <Orders />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
