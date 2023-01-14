// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

// Functional Component
const Breakfast = () => {
    const { breakfastState: [breakfast, setBreakfast] } = useOutletContext();
    const navigate = useNavigate();

    return(
        breakfast ? breakfast.map((indivBreakfast, idx) => {
            return(
                <div key={idx} id="breakfast-box">
                    <div>
                        {/* Detail */}
                        <button id="breakfast-button">
                            <Link to={`/breakfast/${indivBreakfast.breakfastId}`}>View</Link>
                        </button>
                    </div>
                        

                    {/* Image URL */}
                    <img src={indivBreakfast.image} id="breakfast-image"></img>

                    {/* Recipe Name */}
                    <h2 id="breakfast-name">{indivBreakfast.breakfastName}</h2>
                </div>
            )
        }) : "No Breakfast to View"
    )
};

// Export
export default Breakfast;