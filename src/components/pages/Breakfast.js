// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

// Functional Component
const Breakfast = () => {
    const { breakfastState: [breakfast, setBreakfast] } = useOutletContext();

    // Establishing new State;
    const [moreBreakfastDetail, setMoreBreakfastDetail] = useState({});

    // fetchBreakfastDetail
    useEffect (() => {
        async function fetchBreakfastDetail(){
            // Fetch;
            const detailedResponse = await fetch (`https://dal-recipe-back.onrender.com/api/breakfast/:${breakfast.breakfastId}`,{
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            // Translate the promise data;
            console.log("Response:", detailedResponse)
            const detailedData = await detailedResponse.json();
            console.log("Here is translated Json:", detailedData)

            // Set the State
            setMoreBreakfastDetail(detailedData)
        }
        fetchBreakfastDetail()
    }, [])

    {/* This return format is to map all. */}
    return(
        
        breakfast && breakfast.length ? breakfast.map((recipe, idx) => {  
            <p class="title-text">Breakfast</p>          
            return (
                <div key={idx} className="recipe-box">
                    {/* Image */}
                    <div>
                        <img src={recipe.image} id="recipe-image"></img>
                    </div>
                    
                    {/* Item Details */}
                    <div>
                        <p id="recipe-text">{recipe.breakfastName}</p>
                        <p id="recipe-type">Serving Size: {recipe.serving_size}</p>
                        <p id="recipe-ttp">Prep Time: {recipe.time_to_prepare}</p>
                        <button id="view-recipe-button"><Link id="view-recipe-button" class="link" to={`/department/breakfast/:${recipe.breakfastId}`}>View</Link></button>
                    </div>
c
                </div>
            )
        }) : "No Recipes to display, our Chefs are busy preparing for you!"
    )
};

// Export
export default Breakfast;

