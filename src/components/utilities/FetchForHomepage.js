// Import
import React, { useState, useEffect} from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate, useOutletContext, useParams} from "react-router-dom"

// State
const FetchForHomepage = () => {
    const [department, setDepartment] = useState ([]);
    const [breakfast, setBreakfast] = useState ([]);
    const [desserts, setDesserts] = useState ([]);
    const [entrees, setEntrees] = useState ([]);
    const [sides, setSides] = useState ([]);
    const contextObject = {
        departmentState: [department, setDepartment],
        breakfastState: [breakfast, setBreakfast],
        dessertsState: [desserts, setDesserts],
        entreesState: [entrees, setEntrees],
        sidesState: [sides, setSides]
    }
    const navigate = useNavigate();


// Functional Component
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