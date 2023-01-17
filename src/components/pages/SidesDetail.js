// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const SidesDetail = () => {
    const { sidesState: [sides, setSides] } = useOutletContext();
    const navigate = useNavigate();
    const {sidesId} = useParams();

    const [localSides, setLocalSides] = useState({})

    // fetchSidesDetail
    useEffect (() => {
        console.log("BID", sidesId)
        async function fetchSidesDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://dal-recipe-back.onrender.com/api/sides/${sidesId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const food = await response.json();
                console.log("Here is translated Json:", food)
                setLocalSides(food)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchSidesDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            {/* Name */}
            {
                localSides.sidesName ?
                <p id="recipe-detail-name">{localSides.sidesName}</p>:
                <p>Name can not be viewed</p>
            }

            {/* Description */}
            {
                localSides.description ?
                <p id="recipe-detail-description">{localSides.description}</p>:
                <p>Description can not be viewed</p>
            }

            {/* Image */}
            {
                localSides.image ?
                <img src={localSides.image} id="recipe-detail-image"></img>:
                <p>Image can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Ingredients</p>
            
            {/* Ingredients */}
            {
                localSides.ingredients ?
                <p id="recipe-detail-ingredients">{localSides.ingredients}</p>:
                <p>Ingredients can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Method</p>
            {/* Instructions */}
            {
                localSides.instructions ?
                <p id="recipe-detail-instructions">Instructions: {localSides.instructions}</p>:
                <p>Instructions can not be viewed</p>
            }
            
            {/* Go Back Button */}
            <button onClick={() => navigate(-1)} id="go-back-button">Back</button>
        </div>
    )
};

// Export
export default SidesDetail;