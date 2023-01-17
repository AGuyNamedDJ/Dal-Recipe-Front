// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const Entrees = () => {
    const { entreesState: [entrees, setEntrees] } = useOutletContext();
    const navigate = useNavigate();
    const {entreesId} = useParams();

    const [localEntrees, setLocalEntrees] = useState({})

    // fetchEntreesDetail
    useEffect (() => {
        console.log("BID", entreesId)
        async function fetchEntreesDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://dal-recipe-back.onrender.com/api/entrees/${entreesId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const food = await response.json();
                console.log("Here is translated Json:", food)
                setLocalEntrees(food)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchEntreesDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            {/* Name */}
            {
                localEntrees.entreesName ?
                <p id="recipe-detail-name">{localEntrees.entreesName}</p>:
                <p>Name can not be viewed</p>
            }

            {/* Description */}
            {
                localEntrees.description ?
                <p id="recipe-detail-description">{localEntrees.description}</p>:
                <p>Description can not be viewed</p>
            }

            {/* Image */}
            {
                localEntrees.image ?
                <img src={localEntrees.image} id="recipe-detail-image"></img>:
                <p>Image can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Ingredients</p>
            
            {/* Ingredients */}
            {
                localEntrees.ingredients ?
                <p id="recipe-detail-ingredients">{localEntrees.ingredients}</p>:
                <p>Ingredients can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Method</p>
            {/* Instructions */}
            {
                localEntrees.instructions ?
                <p id="recipe-detail-instructions">Instructions: {localEntrees.instructions}</p>:
                <p>Instructions can not be viewed</p>
            }
            
            {/* Go Back Button */}
            <button onClick={() => navigate(-1)} id="go-back-button">Back</button>
        </div>
    )
};

// Export
export default Entrees;