// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";


// Functional Component
const Breakfast = () => {
    const { breakfastsState: [breakfasts, setBreakfasts] } = useOutletContext();
    // const { breakfastId } = useParams()

    // console.log("bid", breakfasts.breakfastid)
    // console.log("breakfast", breakfastId)

    {/* This return format is to map all. */}
    return(
        
        breakfasts && breakfasts.length ? breakfasts.map((recipe, idx) => {  
            <p className="title-text">Breakfast</p>          
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
                        <p id="recipe-ttp">Id: {recipe.breakfastId}</p>
                        <button id="view-recipe-button"><Link id="view-recipe-button" className="link" to={`/department/breakfast/${recipe.breakfastId}`}>View</Link></button>
                    </div>
c
                </div>
            )
        }) : "No Recipes to display, our Chefs are busy preparing for you!"
    )
};

// Export
export default Breakfast;

