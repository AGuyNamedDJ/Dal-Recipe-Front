// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

// Functional Component
const Breakfast = () => {
    const { breakfastState: [breakfast, setBreakfast] } = useOutletContext();

    {/* This return format is to map all. */}
    return(
        breakfast && breakfast.length ? breakfast.map((recipe, idx) => {            
            return (
                <div key={idx}>
                <p id="title-text">Breakfast</p>

                    <div id="recipe-box">
                        <div id="recipe-box-item">

                            {/* Item Template */}
                            <p id="department-box-text">{recipe.breakfastName}</p>
                            <img src={recipe.image} id="recipe-image"></img>
                            <p>DINNERS</p>
                            <p id="department-box-text">{recipe.time_to_prepare}</p>
                            <button id="view-recipe-button"><Link id="view-recipe-button link" to={`/department/breakfast/${recipe.breakfastId}`}>View Recipe</Link></button>
                        </div>
                    </div>
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
