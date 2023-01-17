// Import
import React, { useState, useEffect} from "react";
import Navbar from "./Navbar";
import { Outlet} from "react-router-dom"

// State
const FetchForHomepage = () => {
    // Establishing new State;
    const [departments, setDepartments] = useState ([]);
        // The Getter,  The Setter
    const [breakfasts, setBreakfasts] = useState ([]);
    const [desserts, setDesserts] = useState ([]);
    const [entrees, setEntrees] = useState ([]);
    const [sides, setSides] = useState ([]);
    const contextObject = {
        departmentState: [departments, setDepartments],
        breakfastsState: [breakfasts, setBreakfasts],
        entreesState: [entrees, setEntrees],
        dessertsState: [desserts, setDesserts],
        sidesState: [sides, setSides]
    }

    // Establishing new State;
    // const [moreBreakfastDetail, setMoreBreakfastDetail] = useState({});

// useEffects
    // fetchbreakfastsData
    useEffect(() => {
        async function fetchbreakfastsData () {
            try {
                // Fetch data;
                const response = await fetch ("https://dal-recipe-back.onrender.com/api/breakfast",{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                //Translate the promise data;
                // console.log("This is the breakfasts response:", response)
                const breakfastsData = await response.json();
                console.log("This is the translated breakfasts JSON response:", breakfastsData);

                //Save the data to the State;
                setBreakfasts(breakfastsData)
            } catch (error) {
                console.log("Error fetching breakfasts Data:" )
                console.log(error);
            }
        }
        fetchbreakfastsData();
    }, [])

    // fetchDepartmentData
    useEffect(() => {
        async function fetchDepartmentData () {
            try {
                // Fetch data;
                const response = await fetch ("https://dal-recipe-back.onrender.com/api/department",{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                // console.log("This is the Department response:", response)
                const departmentData = await response.json();
                // console.log("This is the ranslated Department JSON response:", departmentData);

                // Save the data to the State;
                setDepartments(departmentData)
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
                // Fetch data
                const response = await fetch ("https://dal-recipe-back.onrender.com/api/desserts",{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                // console.log("This is the Desserts response:", response)
                const dessertsData = await response.json();
                // console.log("This is the ranslated Desserts JSON response:", dessertsData);

                // Save the data to the State
                setDesserts(dessertsData)
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
                // Fetch data;
                const response = await fetch ("https://dal-recipe-back.onrender.com/api/entrees",{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                // console.log("This is the Entrees response:", response)
                const entreesData = await response.json();
                // console.log("This is the ranslated Entrees JSON response:", entreesData);

                //Save the data to the State;
                setEntrees(entreesData)
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
                // Fetch the data;
                const response = await fetch ("https://dal-recipe-back.onrender.com/api/sides",{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                // console.log("This is the Sides response:", response)
                const sidesData = await response.json();
                // console.log("This is the ranslated Sides JSON response:", sidesData);

                // Save the data to the State;
                setSides(sidesData)
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