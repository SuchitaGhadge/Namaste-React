import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Help from "./components/Help";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Offer from "./components/Offer";
import Error from "./components/Error";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/offers',
    element: <Offer />
  },
  {
    path: '/help',
    element: <Help />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter} />
);

// npx parcel index.html --https   == for build local on https instead of http
