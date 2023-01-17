// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const DessertsDetail = () => {
    const { dessertsState: [desserts, setDesserts] } = useOutletContext();
    const navigate = useNavigate();
    const {dessertsId} = useParams();

    const [localDesserts, setLocalDesserts] = useState({})

    // fetchDessertsDetail
    useEffect (() => {
        console.log("BID", dessertsId)
        async function fetchDessertsDetail(){
            // Fetch;
            try{
                const response = await fetch (`https://dal-recipe-back.onrender.com/api/desserts/${dessertsId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const food = await response.json();
                console.log("Here is translated Json:", food)
                setLocalDesserts(food)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchDessertsDetail()
    }, [])
    
    // Return
    return(
        <div className="more-detail">
            {/* Name */}
            {
                localDesserts.dessertsName ?
                <p id="recipe-detail-name">{localDesserts.dessertsName}</p>:
                <p>Name can not be viewed</p>
            }

            {/* Description */}
            {
                localDesserts.description ?
                <p id="recipe-detail-description">{localDesserts.description}</p>:
                <p>Description can not be viewed</p>
            }

            {/* Image */}
            {
                localDesserts.image ?
                <img src={localDesserts.image} id="recipe-detail-image"></img>:
                <p>Image can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Ingredients</p>
            
            {/* Ingredients */}
            {
                localDesserts.ingredients ?
                <p id="recipe-detail-ingredients">{localDesserts.ingredients}</p>:
                <p>Ingredients can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Method</p>
            {/* Instructions */}
            {
                localDesserts.instructions ?
                <p id="recipe-detail-instructions">Instructions: {localDesserts.instructions}</p>:
                <p>Instructions can not be viewed</p>
            }
            
            {/* Go Back Button */}
            <button onClick={() => navigate(-1)} id="go-back-button">Back</button>
        </div>
    )
};

// Export
export default DessertsDetail;