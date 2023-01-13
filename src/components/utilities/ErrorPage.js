// Import
import React from "react";

// Functional Component
const ErrorPage = () => {
    return(
        <div>
            {/* Image */}
            <div class="error-page-image-box">
                <img src="https://www.blackchef.com/images/DesignsByAymara.com-Afro-Proud-Roots-SVG-59.png" alt="error-page-pic" id="error-page-pic"></img>
            </div>

            {/* Text */}
            <div class="error-page-box">
                <p id="error-page-text">"Oops, Something went wrong..."</p>
            </div>
            <div class="error-page-subbox">
                <p id="error-page-subtext">Sorry, we're not able to find what you were looking for.</p>
            </div>
        </div>
    )
};

// Export
export default ErrorPage;