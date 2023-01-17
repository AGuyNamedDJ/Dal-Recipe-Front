// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

// Functional Component
const Breakfast = () => {
    const { breakfastState: [breakfast, setBreakfast] } = useOutletContext();

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
                        <button id="view-recipe-button"><Link id="view-recipe-button" class="link" to={`/department/breakfast/${recipe.breakfastId}`}>View</Link></button>
                    </div>
c
                </div>
            )
        }) : "No Recipes to display, our Chefs are busy preparing for you!"
    )
};

// Export
export default Breakfast;

{/* <div key={item.breakfastId}>
<h2>{item.breakfastName}</h2>
<p>{item.image}</p>
</div> */}