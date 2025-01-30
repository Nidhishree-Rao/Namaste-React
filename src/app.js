import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

/**
 * App Layout: Sticky Footer Implementation
 */
const AppLayout = () => {
   return (
      <Provider store={appStore}>
         <div className="flex flex-col">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex flex-col min-h-screen justify-between">
               <Outlet />
            </main>

            {/* Footer */}
            <Footer />
         </div>
      </Provider>
   );
};

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            path: "/",
            element: <Body />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "restauarants/:resid",
            element: <RestaurantMenu />,
         },
         {
            path: "/Cart",
            element: <Cart />,
         },
      ],
      errorElement: <Error />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
