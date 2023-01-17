// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

// Functional Component
const Desserts = () => {
    const { dessertsState: [desserts, setDesserts] } = useOutletContext();

    {/* This return format is to map all. */}
    return(
        
        desserts && desserts.length ? desserts.map((recipe, idx) => {  
            <p class="title-text">Desserts</p>          
            return (
                <div key={idx} className="recipe-box">
                    {/* Image */}
                    <div>
                        <img src={recipe.image} id="recipe-image"></img>
                    </div>
                    
                    {/* Item Details */}
                    <div>
                        <p id="recipe-text">{recipe.dessertsName}</p>
                        <p id="recipe-type">Serving Size: {recipe.serving_size}</p>
                        <p id="recipe-ttp">Prep Time: {recipe.time_to_prepare}</p>
                        <button id="view-recipe-button"><Link id="view-recipe-button" class="link" to={`/department/desserts/${recipe.dessertsId}`}>View</Link></button>
                    </div>
c
                </div>
            )
        }) : "No Recipes to display, our Chefs are busy preparing for you!"
    )
};

// Export
export default Desserts;