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
        entreesState: [entrees, setEntrees],
        dessertsState: [desserts, setDesserts],
        sidesState: [sides, setSides]
    }
    const navigate = useNavigate();

// useEffects
    // fetchBreakfastData
    useEffect(() => {
        async function fetchBreakfastData () {
            try {
                const response = await fetch ("https://dal-recipe-back.onrender.com/api/breakfast");
                console.log("This is the response:", response)
                const breakfastData = await response.json();
                console.log("This is the ranslated JSON response:", breakfastData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBreakfastData();
    }, [])

// Functional Component
    return (
        <div>
            
            <Outlet context={contextObject} />
            <div id="navbar-box">
                <Navbar context={contextObject}/>
            </div>
        </div>
    )
}

export default FetchForHomepage;