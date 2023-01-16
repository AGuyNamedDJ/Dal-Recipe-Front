// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

// Functional Component
const Breakfast = () => {
    const { breakfastState: [breakfast, setBreakfast] } = useOutletContext();

    return(
        <div>
            <p id="title-text">Breakfast</p>
            {/* This return format is to map all. */}

            <div id="recipe-box">
                {
                    breakfast && breakfast.length ? breakfast.map((recipe, idx) => {
                        return <div key={idx}>
                            <h2>{recipe.breakfastName}</h2>
                            <p>{recipe.image}</p>

                        </div>
                    }) : <p>No recipes to display - Our chefs are busy preparing</p>
                }
            </div>
        </div>
    )
};

// Export
export default Breakfast;

{/* <div key={item.breakfastId}>
<h2>{item.breakfastName}</h2>
<p>{item.image}</p>
</div> */}
