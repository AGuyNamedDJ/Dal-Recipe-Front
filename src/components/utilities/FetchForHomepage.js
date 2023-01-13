// Import
import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate, useOutletContext, useParams} from "react-router-dom"

// Functional Component
const FetchForHomepage = () => {
    return (
        <div>
            
            <Outlet />
            <Navbar />
        </div>
    )
}

// Export
export default FetchForHomepage;