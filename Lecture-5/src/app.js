import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenuPage from "./components/RestrauntMenuPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import User from "./components/User";

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {


  const [userName, setUserName] = useState('')

  useEffect(() => {
    // make an API call to get the user Info
    const data = {
      name: "Prateek Ramani"
    }
    setUserName(data.name)
    console.log("username is set to", data.name)
  }, [])

  return (
    // UserContext.Provider - value here would be Default User
    <UserContext.Provider value={{ loggedInUser: userName , setUserName }}>
      {/* had the UserContext been provided only onto Outlet , then  username value would have gone only to Outlet component*/}
      {/* UserContext.Provider - value here would be Default userName */}
      <div className="app">
        <Header />
        {/* this Header() dosent works for ConextProvider */}
        {/* {Header()} */}
        {/* <UserContext.Provider value={{ loggedInUser: "Gaurav Ramani" , setUserName }}> */}
          {/* UserContext.Provider - value here would be Default Gaurav Ramani */}
          <Outlet />
        {/* </UserContext.Provider> */}
      </div>
    </UserContext.Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading ...</h1>}> <About /> </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer />}> <Grocery /> </Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuPage />
      }
    ],
    errorElement: <Error />
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
