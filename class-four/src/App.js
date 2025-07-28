import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Help from "./components/Help";
import {createBrowserRouter, RouterProvider, Outlet, useLocation} from "react-router-dom"
// import Offer from "./components/Offer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart"
import Shimmer from "./components/Shimmer";
import Login from "./components/Login";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import( "./components/Grocery"))
const Offer = lazy(()=> import("./components/Offer"))
const App = () => {
  const [userName , setUserName] = useState('')
  const location = useLocation()
  console.log('location', location)

  return (
    <UserContext.Provider value={{loggedInUser: userName , setUserName} }>
    <div className="app">
      <Header isLoggedIn = {location?.state?.isLoggedIn} />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/offers',
        element: <Suspense fallback={<h1>Loading....</h1>}> <Offer /></Suspense>,
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: 'restaurants/:resId',
        element: <RestaurantMenu />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'grocery',
        element: <Suspense fallback={<Shimmer />}><Grocery/></Suspense>
      },
      {
        path: 'login',
        element: <Login />
      }
    ],
    errorElement: <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter} />
);

// npx parcel index.html --https   == for build local on https instead of http
