// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

// Functional Component
const Breakfast = () => {
    const { breakfastState: [breakfast, setBreakfast] } = useOutletContext();
    const navigate = useNavigate();

    return(
        <div>
            <p id="title-text">Breakfast</p>
        </div>
    )
};
// Export
export default Breakfast;