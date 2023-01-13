// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Utilities
import ErrorPage from "./components//utilities/ErrorPage";
import FetchForHomepage from "./components/utilities/FetchForHomepage";
import HomePage from "./components/utilities/HomePage";
import Search from "./components/utilities/Search";

// Import Pages
import Breakfast from "./components/pages/Breakfast";
import Department from "./components/pages/Department";

// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <FetchForHomepage />, // useEffects & fetches;
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage /> // Actual homepage;
            },
            {
                path: "/breakfast",
                element: <Breakfast />
            },
            {
                path: "/department",
                element: <Department />
            },
            {
                path: "/search",
                element: <Search />
            }
        ]
    }
])

// Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)