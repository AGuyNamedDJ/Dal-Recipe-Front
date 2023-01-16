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
                // console.log("This is the Breakfast response:", response)
                const breakfastData = await response.json();
                console.log("This is the translated Breakfast JSON response:", breakfastData);
            } catch (error) {
                console.log("Error fetching Breakfast Data:" )
                console.log(error);
            }
        }
        fetchBreakfastData();
    }, [])

    // fetchDepartmentData
    useEffect(() => {
        async function fetchDepartmentData () {
            try {
                const response = await fetch ("https://dal-recipe-back.onrender.com/api/department");
                // console.log("This is the Department response:", response)
                const departmentData = await response.json();
                console.log("This is the ranslated Department JSON response:", departmentData);
            } catch (error) {
                console.log("Error fetching Department Data:" )
                console.log(error);
            }
        }
        fetchDepartmentData();
    }, [])

    // fetchDessertsData
    useEffect(() => {
        async function fetchDessertsData () {
            try {
                const response = await fetch ("https://dal-recipe-back.onrender.com/api/desserts");
                // console.log("This is the Desserts response:", response)
                const dessertsData = await response.json();
                console.log("This is the ranslated Desserts JSON response:", dessertsData);
            } catch (error) {
                console.log("Error fetching Desserts Data:" )
                console.log(error);
            }
        }
        fetchDessertsData();
    }, [])

    // fetchEntreesData
    useEffect(() => {
        async function fetchEntreesData () {
            try {
                const response = await fetch ("https://dal-recipe-back.onrender.com/api/entrees");
                // console.log("This is the Entrees response:", response)
                const entreesData = await response.json();
                console.log("This is the ranslated Entrees JSON response:", entreesData);
            } catch (error) {
                console.log("Error fetching Entrees Data:" )
                console.log(error);
            }
        }
        fetchEntreesData();
    }, [])

    // fetchSidesData
    useEffect(() => {
        async function fetchSidesData () {
            try {
                const response = await fetch ("https://dal-recipe-back.onrender.com/api/sides");
                // console.log("This is the Sides response:", response)
                const sidesData = await response.json();
                console.log("This is the ranslated Sides JSON response:", sidesData);
            } catch (error) {
                console.log("Error fetching Sides Data:" )
                console.log(error);
            }
        }
        fetchSidesData();
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