// Import
import React from "react";
import { Link } from "react-router-dom";

// Functional Component
const ErrorPage = () => {
    return(
        <div>
            {/* Image */}
            <div className="error-page-image-box">
                <img src="https://www.blackchef.com/images/DesignsByAymara.com-Afro-Proud-Roots-SVG-59.png" alt="error-page-pic" id="error-page-pic"></img>
            </div>

            {/* Text */}
            <div className="error-page-box">
                <p id="error-page-text">"Oops, Something went wrong..."</p>
            </div>
            <div className="error-page-subbox">
                <p id="error-page-subtext">Sorry, we're not able to find what you were looking for.</p>
            </div>
            <div className="error-page-button">
                <Link to="/"><button id="error-page-button-text">Take Me Home</button></Link>
            </div>
        </div>
    )
};

// Export
export default ErrorPage;