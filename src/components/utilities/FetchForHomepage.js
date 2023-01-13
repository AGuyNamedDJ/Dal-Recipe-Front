// Import
import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate, useOutletContext, useParams} from "react-router-dom"

// Functional Component
const FetchForHomepage = () => {
    return (
        <div>
            
            <Outlet />
            <div id="navbar-box">
                <Navbar />
            </div>
        </div>
    )
}

// Export
export default FetchForHomepage;