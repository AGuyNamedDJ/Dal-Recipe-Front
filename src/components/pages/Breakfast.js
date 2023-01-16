// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

// Functional Component
const Breakfast = () => {
    const [breakfast, setBreakfast] = useState ([]);

    return(
        <div>
            <p id="title-text">Breakfast</p>
            {/* This return format is to map all. */}

            <div id="recipe-box">
                {
                    breakfast && breakfast.length ? breakfast.map((recipe, idx) => {
                        return <div key={idx}>
                            <p>Name:</p>

                        </div>
                    }) : <p>No recipes to display - Our chefs are busy preparing</p>
                }
            </div>
        </div>
    )
};
// Export
export default Breakfast;
