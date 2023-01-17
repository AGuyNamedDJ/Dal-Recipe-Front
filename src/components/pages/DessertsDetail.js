// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const DessertsDetail = () => {
    const { dessertsState: [desserts, setDesserts] } = useOutletContext();
    const navigate = useNavigate();

    // Establishing new State;
    const [moreDessertsDetail, setMoreDessertsDetail] = useState({});

    // fetchDessertsDetail
    useEffect (() => {
        async function fetchDessertsDetail(){
            // Fetch;
            const detailedResponse = await fetch (`https://dal-recipe-back.onrender.com/api/desserts/${dessertsId}`,{
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            // Translate the promise data;
            console.log("Response:", detailedResponse)
            const detailedData = await detailedResponse.json();
            console.log("Here is translated Json:", detailedData)

            // Set the State
            setMoreDessertsDetail(detailedData)
        }
        fetchDessertsDetail()
    }, [])
    
    console.log("moreDessertsDetail:", moreDessertsDetail)
    
    // Return
    return(
        <div className="more-detail">
            {/* Name */}
            {
                moreDessertsDetail.dessertsName ?
                <p id="recipe-detail-name">{moreDessertsDetail.dessertsName}</p>:
                <p>Name can not be viewed</p>
            }

            {/* Description */}
            {
                moreDessertsDetail.description ?
                <p id="recipe-detail-description">{moreDessertsDetail.description}</p>:
                <p>Description can not be viewed</p>
            }

            {/* Image */}
            {
                moreDessertsDetail.image ?
                <img src={moreDessertsDetail.image} id="recipe-detail-image"></img>:
                <p>Image can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Ingredients</p>
            
            {/* Ingredients */}
            {
                moreDessertsDetail.ingredients ?
                <p id="recipe-detail-ingredients">{moreDessertsDetail.ingredients}</p>:
                <p>Ingredients can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Method</p>
            {/* Instructions */}
            {
                moreDessertsDetail.instructions ?
                <p id="recipe-detail-instructions">Instructions: {moreDessertsDetail.instructions}</p>:
                <p>Instructions can not be viewed</p>
            }
            
            {/* Go Back Button */}
            <button onClick={() => navigate(-1)} id="go-back-button">Back</button>
        </div>
    )
};

// Export
export default DessertsDetail;