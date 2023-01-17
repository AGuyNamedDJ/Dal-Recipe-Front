// Import
import React, { useState, useEffect} from "react"
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom"

// Functional Component
const BreakfastDetail = () => {
    const { breakfastState: [breakfast, setBreakfast] } = useOutletContext();

    // Establishing new State;
    const [moreBreakfastDetail, setMoreBreakfastDetail] = useState({});

    // fetchBreakfastDetail
    useEffect (() => {
        async function fetchBreakfastDetail(){
            // Fetch;
            const detailedResponse = await fetch (`https://dal-recipe-back.onrender.com/api/breakfast/11`,{
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            // Translate the promise data;
            console.log("Response:", detailedResponse)
            const detailedData = await detailedResponse.json();
            console.log("Here is translated Json:", detailedData)

            // Set the State
            setMoreBreakfastDetail(detailedData)
        }
        fetchBreakfastDetail()
    }, [])
    
    console.log("moreBreakfastDetail:", moreBreakfastDetail)
    
    // Return
    return(
        <div className="more-detail">
            {/* Name */}
            {
                moreBreakfastDetail.breakfastName ?
                <p id="recipe-detail-name">{moreBreakfastDetail.breakfastName}</p>:
                <p>Name can not be viewed</p>
            }

            {/* Description */}
            {
                moreBreakfastDetail.description ?
                <p id="recipe-detail-description">Recipe Description: {moreBreakfastDetail.description}</p>:
                <p>Description can not be viewed</p>
            }

            {/* Image */}
            {
                moreBreakfastDetail.image ?
                <img src={moreBreakfastDetail.image} id="recipe-detail-image"></img>:
                <p>Image can not be viewed</p>
            }
                    
            {/* Ingredients */}
            {
                moreBreakfastDetail.ingredients ?
                <p id="recipe-detail-ingredients">Ingredients Needed: {moreBreakfastDetail.ingredients}</p>:
                <p>Ingredients can not be viewed</p>
            }
            
            {/* Instructions */}
            {
                moreBreakfastDetail.instructions ?
                <p id="recipe-detail-instructions">Instructions: {moreBreakfastDetail.instructions}</p>:
                <p>Instructions can not be viewed</p>
            }
            
        </div>
    )
};

// Export
export default BreakfastDetail;