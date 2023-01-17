// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const EntreesDetail = () => {
    const { entreesState: [entrees, setEntrees] } = useOutletContext();

    // console.log("What i wanat see", entrees[11])
    const navigate = useNavigate();

    // Establishing new State;
    const [moreEntreesDetail, setMoreEntreesDetail] = useState({});

    console.log("entreesId", entrees.entreesId)

    // fetchentreesDetail
    useEffect (() => {
        async function fetchentreesDetail(){
            // Fetch;
            const detailedResponse = await fetch (`https://dal-recipe-back.onrender.com/api/entrees/${entrees.entreesId}`,{
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            // Translate the promise data;
            console.log("Response:", detailedResponse)
            const detailedData = await detailedResponse.json();
            console.log("Here is translated Json:", detailedData)

            // Set the State
            setMoreEntreesDetail(detailedData)
        }
        fetchEntreesDetail()
    }, [])
    
    console.log("moreEntreesDetail:", moreEntreesDetail)
    
    // Return
    return(
        <div className="more-detail">
            {/* Name */}
            {
                moreEntreesDetail.entreesName ?
                <p id="recipe-detail-name">{moreEntreesDetail.entreesName}</p>:
                <p>Name can not be viewed</p>
            }

            {/* Description */}
            {
                moreEntreesDetail.description ?
                <p id="recipe-detail-description">{moreEntreesDetail.description}</p>:
                <p>Description can not be viewed</p>
            }

            {/* Image */}
            {
                moreEntreesDetail.image ?
                <img src={moreEntreesDetail.image} id="recipe-detail-image"></img>:
                <p>Image can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Ingredients</p>
            
            {/* Ingredients */}
            {
                moreEntreesDetail.ingredients ?
                <p id="recipe-detail-ingredients">{moreEntreesDetail.ingredients}</p>:
                <p>Ingredients can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Method</p>
            {/* Instructions */}
            {
                moreEntreesDetail.instructions ?
                <p id="recipe-detail-instructions">Instructions: {moreEntreesDetail.instructions}</p>:
                <p>Instructions can not be viewed</p>
            }
            
            {/* Go Back Button */}
            <button onClick={() => navigate(-1)} id="go-back-button">Back</button>
        </div>
    )
};

// Export
export default EntreesDetail;