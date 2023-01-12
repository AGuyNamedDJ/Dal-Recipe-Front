// Imports
import react from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

// Import Utilities

// Import Pages


// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: 
            }
        ]
    }
])