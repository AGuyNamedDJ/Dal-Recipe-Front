// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Utilities
import AboutUs from "./components/utilities/AboutUs";
import ErrorPage from "./components//utilities/ErrorPage";
import FetchForHomepage from "./components/utilities/FetchForHomepage";
import HomePage from "./components/utilities/HomePage";
import Search from "./components/utilities/Search";

// Import Pages
import Breakfast from "./components/pages/BreakfastDetail";
import BreakfastDetail from "./components/pages/BreakfastDetail";
import Department from "./components/pages/Department";
import Desserts from "./components/pages/Desserts";
import Entrees from "./components/pages/Entrees";
import Sides from "./components/pages/Sides";

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
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/breakfast",
                element: <Breakfast />
            },
            {
                path: "/breakfast/:breakfastId",
                element: <BreakfastDetail />
            },
            {
                path: "/department",
                element: <Department />
            },
            {
                path: "/desserts",
                element: <Desserts />
            },
            {
                path: "/entrees",
                element: <Entrees />
            },
            {
                path: "/sides",
                element: <Sides />
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