// Import
import React, { useEffect, useState } from "react";
import { Link, useOutletContext,useParams } from "react-router-dom";

// Functional Component
const Department = () => {
    const { departmentState: [department, setDepartment] } = useOutletContext();

    const breakfastDepartment = department.filter(department => department.departmentName === 'Breakfast');
    const entreesDepartment = department.filter(department => department.departmentName === 'Entrees');
    const dessertsDepartment = department.filter(department => department.departmentName === 'Desserts');
    const sidesDepartment = department.filter(department => department.departmentName === 'Sides');


    return(
        <div>
            <p id="title-text">Recipes & Cooking Ideas</p>
            <br></br>

            <div class="department-box">
                {/* Breakfast */}
                <div class="department-box-breakfast">
                    <img src="https://images.squarespace-cdn.com/content/v1/5d38ca4174e198000123709a/1605034683424-L3T9E7Q22FOIAYA6B19F/image-asset.jpeg?format=1500w" id="breakfast-main-image"></img>
                    {
                        breakfastDepartment.map((department, idx) => {
                            return <div id="department-box-text" key={idx}>
                                <Link to={`/breakfast`} class="link">{department.departmentName} </Link>
                                <p id="department-box-subtext">"Delicious and hearty breakfast options to start your day off right."</p>
                                
                            </div>
                        })
                    }
                </div>

                {/* Entrees */}
                <div id="department-box-entrees">
                    <img src="https://assets.vogue.com/photos/62714da82a7f6e1661978205/master/w_2560%2Cc_limit/FN-MetGala-02_00284.jpg" id="entrees-main-image"></img>
                    {
                        entreesDepartment.map((department, idx) => {
                            return <div id="department-box-text" key={idx}>
                                <Link to={`/entrees`} class="link">{department.departmentName} </Link>
                                <p id="department-box-subtext">"Delicious main course options for any meal of the day."</p>
                            </div>
                        })
                    }
                </div>

                {/* Desserts */}
                <div id="department-box-desserts">
                    <img src="https://images7.alphacoders.com/409/thumb-1920-409387.jpg" id="desserts-main-image"></img>
                    {
                        dessertsDepartment.map((department, idx) => {
                            return <div id="department-box-text" key={idx}>
                                <Link to={`/desserts`} class="link">{department.departmentName} </Link>
                                <p id="department-box-subtext">"Indulgent sweet treats to satisfy your cravings"</p>
                            </div>
                        })
                    }
                </div>

                {/* Sides */}
                <div id="department-box-sides">
                    <img src="https://media.istockphoto.com/id/160117152/photo/korean-food-side-dishes.jpg?s=612x612&w=0&k=20&c=B4W2Ry4FFrN7v6DQ9cHuu-5-6PaTfZpBDkSz24Gxsc0=" id="sides-main-image"></img>
                    {
                        sidesDepartment.map((department, idx) => {
                            return <div id="department-box-text" key={idx}>
                                <Link to={`/sides`} class="link">{department.departmentName} </Link>
                                <p id="department-box-subtext">"Savor the sides: delicious accompaniments to enhance your meal"</p>
                            </div>
                        })
                    }
                </div>
            </div>

            {/* <br></br>
            <div id="recipes-explore">Explore Recipes</div>
            <br></br>
            <br></br> */}
        </div>
    )
};

// Export
export default Department;

    // return(
    //     <div>
    //         <p id="title-text">Recipes & Cooking Ideas</p>

    //         <div class="department-box">
    //             {
    //                 department.map((department, idx) => {
    //                     return <div key={idx}>
    //                             <img src="https://images.squarespace-cdn.com/content/v1/5d38ca4174e198000123709a/1605034683424-L3T9E7Q22FOIAYA6B19F/image-asset.jpeg?format=1500w" id="breakfast-main-image"></img>
    //                             <p id="department-box-text">Name of Department: {department.departmentName}</p>
    //                         </div>
    //                 })
    //             }                
    //         </div>
    //     </div>
    // )
    