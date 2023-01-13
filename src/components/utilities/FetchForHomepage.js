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
    // fetchAllDepartment
    useEffect(() => {
        console.log("useEffect being triggered for department hook.")
        async function fetchAllDepartment(){
            try{
                const departmentResponse = await fetch(`https://dal-recipe-back.onrender.com/api/department`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("This is the department response:", departmentResponse);
                const departmentData = await departmentResponse.json();
                console.log("this is the department data:", departmentData);

            // Department Filter
                // Breakfast Id == 1
                const breakfastData = departmentData.filter(oneDepartment => {
                    return oneDepartment.departmentId === 1
                })

                // Entrees Id == 2
                const entreesData = departmentData.filter(oneDepartment => {
                    return oneDepartment.departmentId === 2
                })

                // Desserts Id == 3
                const dessertsData = departmentData.filter(oneDepartment => {
                    return oneDepartment.departmentId === 3
                })

                // Sides Id == 4
                const sidesData = departmentData.filter(oneDepartment => {
                    return oneDepartment.departmentId === 4
                })

                setDepartment(departmentData)
                setBreakfast(breakfastData)
                setEntrees(entreesData)
                setDesserts(dessertsData)
                setSides(sidesData)
            } catch(error) {
                console.log(error)
            }
        }
        fetchAllDepartment()
        console.log("End of department hooks.")
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

// Export
export default FetchForHomepage;