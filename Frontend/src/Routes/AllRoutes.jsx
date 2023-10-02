import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../Components/Home';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Pages/Dashboard';
import Donations from '../Pages/Donations';
import Transfers from '../Pages/Transfers';
import Updates from '../Pages/Updates';
import FundPage from '../Pages/FundPage';

const AllRoutes = () => {
    const appRoute=createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sidebar",
          element: <Sidebar />,
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
          element:<FundPage />,
        },
      ]);
      return (
        <RouterProvider router={appRoute} />
      );
};

export default AllRoutes;