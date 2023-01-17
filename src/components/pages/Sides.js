// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

// Functional Component
const Sides = () => {
    const { sidesState: [sides, setSides] } = useOutletContext();

    {/* This return format is to map all. */}
    return(
        
        sides && sides.length ? sides.map((recipe, idx) => {  
            <p class="title-text">Sides</p>          
            return (
                <div key={idx} className="recipe-box">
                    {/* Image */}
                    <div>
                        <img src={recipe.image} id="recipe-image"></img>
                    </div>
                    
                    {/* Item Details */}
                    <div>
                        <p id="recipe-text">{recipe.sidesName}</p>
                        <p id="recipe-type">Serving Size: {recipe.serving_size}</p>
                        <p id="recipe-ttp">Prep Time: {recipe.time_to_prepare}</p>
                        <button id="view-recipe-button"><Link id="view-recipe-button" className="link" to={`/department/sides/${recipe.sidesId}`}>View</Link></button>
                    </div>
c
                </div>
            )
        }) : "No Recipes to display, our Chefs are busy preparing for you!"
    )
};

// Export
export default Sides;