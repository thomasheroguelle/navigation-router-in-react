import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import App from "./App";
import Products, { productsLoader } from "./pages/Products";
import ProductDetails, { productLoader } from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";

function AppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            errorElement: <ErrorPage />,
            element: <App />, // = élément parent
            children: [
                {
                    index: true, // true pour élément home car page par défaut 
                    element: <Home />
                },
                {
                    path: "/shop",
                    element: <Shop />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/products",
                    element: <Products />,
                    loader: productsLoader
                },
                {
                    path: "/product/:id",
                    element: <ProductDetails />,
                    loader: productLoader
                },

            ]
        }
    ]);
    return <RouterProvider router={router} />

};
export default AppRouter;

// https://reactrouter.com/en/main/routers/create-browser-router