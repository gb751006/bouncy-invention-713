import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../Components/Home';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Pages/Dashboard';
import Donations from '../Pages/Donations';
import Transfers from '../Pages/Transfers';
import Updates from '../Pages/Updates';
import FundPage from '../Pages/FundPage';
import SignupPage from '../Pages/SignUp';
import LoginPage from '../Pages/Login';
import Multistep from '../Components/multipage';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
    const appRoute=createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sidebar",
          element: <PrivateRoute><Sidebar /></PrivateRoute>,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "donations",
              element: <Donations />,
            },
            {
              path: "transfers",
              element: <Transfers />,
            },
            {
              path: "updates",
              element: <Updates />,
            },
          ],
        },
        {
          path: "/fundpage/:id",
          element:<PrivateRoute><FundPage /></PrivateRoute>,
        },
        {
          path: "/register",
          element:<SignupPage />,
        },
        {
          path: "/login",
          element:<LoginPage />,
        },
        {
          path: "/donationform",
          element:<PrivateRoute><Multistep /></PrivateRoute>,
        },
      ]);
      return (
        <RouterProvider router={appRoute} />
      );
};

export default AllRoutes;