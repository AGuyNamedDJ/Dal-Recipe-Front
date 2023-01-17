// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const sidesDetail = () => {
    const { sidesState: [sides, setSides] } = useOutletContext();

    // console.log("What i wanat see", sides[11])
    const navigate = useNavigate();

    // Establishing new State;
    const [moreSidesDetail, setMoreSidesDetail] = useState({});

    console.log("sidesId", sides.sidesId)

    // fetchSidesDetail
    useEffect (() => {
        async function fetchSidesDetail(){
            // Fetch;
            const detailedResponse = await fetch (`https://dal-recipe-back.onrender.com/api/sides/${sides.sidesId}`,{
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            // Translate the promise data;
            console.log("Response:", detailedResponse)
            const detailedData = await detailedResponse.json();
            console.log("Here is translated Json:", detailedData)

            // Set the State
            setMoreSidesDetail(detailedData)
        }
        fetchSidesDetail()
    }, [])
    
    console.log("moreSidesDetail:", moreSidesDetail)
    
    // Return
    return(
        <div className="more-detail">
            {/* Name */}
            {
                moreSidesDetail.sidesName ?
                <p id="recipe-detail-name">{moreSidesDetail.sidesName}</p>:
                <p>Name can not be viewed</p>
            }

            {/* Description */}
            {
                moreSidesDetail.description ?
                <p id="recipe-detail-description">{moreSidesDetail.description}</p>:
                <p>Description can not be viewed</p>
            }

            {/* Image */}
            {
                moreSidesDetail.image ?
                <img src={moreSidesDetail.image} id="recipe-detail-image"></img>:
                <p>Image can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Ingredients</p>
            
            {/* Ingredients */}
            {
                moreSidesDetail.ingredients ?
                <p id="recipe-detail-ingredients">{moreSidesDetail.ingredients}</p>:
                <p>Ingredients can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Method</p>
            {/* Instructions */}
            {
                moreSidesDetail.instructions ?
                <p id="recipe-detail-instructions">Instructions: {moreSidesDetail.instructions}</p>:
                <p>Instructions can not be viewed</p>
            }
            
            {/* Go Back Button */}
            <button onClick={() => navigate(-1)} id="go-back-button">Back</button>
        </div>
    )
};

// Export
export default sidesDetail;