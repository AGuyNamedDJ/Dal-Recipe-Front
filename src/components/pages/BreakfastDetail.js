// Import
import React, { useState, useEffect} from "react";
import { useNavigate, useOutletContext, Link, useParams } from "react-router-dom";

// Functional Component
const BreakfastDetail = () => {
    const { breakfastsState: [breakfasts, setBreakfasts] } = useOutletContext();
    const navigate = useNavigate();
    const {breakfastId} = useParams();
    // const localBreakfast = breakfast.find(bf => bf.id == breakfastId)


    const [localBreakfasts, setLocalBreakfasts] = useState({})
    // const bfParams = useParams()
    //     useEffect(() => {
    //     function fetchBreakfast() {
    //     // fetch using bfParams
    //     setLocalBreakfasts(breakfastFromFetch)
    //     }
    //     fetchBreakfast()
    //     }, [])

    // fetchBreakfastDetail
    useEffect (() => {
        console.log("BID", breakfastId)
        async function fetchBreakfastDetail(){
            // Fetch;
            try{

                const response = await fetch (`https://dal-recipe-back.onrender.com/api/breakfast/${breakfastId}`,{
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                // Translate the promise data;
                console.log("Response:", response)
                const breakfast = await response.json();
                console.log("Here is translated Json:", breakfast)
                setLocalBreakfasts(breakfast)
            } catch (error)
                {console.error(error)}
            // Set the State
        }
        fetchBreakfastDetail()
    }, [])
    
    // console.log("moreBreakfastDetail:", moreBreakfastDetail)
    // console.log("breakfast", breakfastId)
    
    // Return
    return(
        <div className="more-detail">
            {/* Name */}
            {
                localBreakfasts.breakfastName ?
                <p id="recipe-detail-name">{localBreakfasts.breakfastName}</p>:
                <p>Name can not be viewed</p>
            }

            {/* Description */}
            {
                localBreakfasts.description ?
                <p id="recipe-detail-description">{localBreakfasts.description}</p>:
                <p>Description can not be viewed</p>
            }

            {/* Image */}
            {
                localBreakfasts.image ?
                <img src={localBreakfasts.image} id="recipe-detail-image"></img>:
                <p>Image can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Ingredients</p>
            
            {/* Ingredients */}
            {
                localBreakfasts.ingredients ?
                <p id="recipe-detail-ingredients">{localBreakfasts.ingredients}</p>:
                <p>Ingredients can not be viewed</p>
            }
            
            <br></br>
            <p id="recipe-detail-subtitle">Method</p>
            {/* Instructions */}
            {
                localBreakfasts.instructions ?
                <p id="recipe-detail-instructions">Instructions: {localBreakfasts.instructions}</p>:
                <p>Instructions can not be viewed</p>
            }
            
            {/* Go Back Button */}
            <button onClick={() => navigate(-1)} id="go-back-button">Back</button>
        </div>
    )
};

// Export
export default BreakfastDetail;