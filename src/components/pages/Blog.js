// Import
import React from "react";

// Functional Component
const Blog = () => {
    return (
        <div className="blog-container">
            <h1 className="blog-header">Our Blog</h1>

            {/* Blog 1 */}
            <div className="blog-section">
                <h2 className="blog-section-title">Eating healthy on a budget</h2>
                <p className="blog-section-date">Posted on: January 1, 2020</p>
                <p className="blog-section-description">Eating healthy can be a challenge, especially when you're on a tight budget. But with a little planning and creativity, it's possible to eat well without breaking the bank. Here are a few tips to help you eat healthy on a budget.</p>
                <ul className="blog-section-list">
                    <li>Plan your meals in advance: Before heading to the grocery store, plan out your meals for the week. This will help you avoid impulse buys and stick to your budget.</li>
                    <li>Buy in bulk: Buying in bulk can save you money on items like rice, beans, and oatmeal. Just be sure to store them properly to prevent spoilage.</li>
                    <li>Shop the perimeter of the store: The perimeter of the store is where you'll find the freshest foods, like fruits, vegetables, and meats. These foods tend to be healthier and more budget-friendly than processed foods found in the middle aisles.</li>
                    <li>Cook at home: Eating out can be expensive, so try to cook at home as much as possible. Not only will this save you money, but it will also allow you to control the ingredients and portion sizes.</li>
                </ul>
                <p className="blog-section-description">Remember, eating healthy is not about perfection, it's about making small changes that add up over time. By following these tips, you'll be able to eat well and stay within your budget.</p>
            </div>
            <br></br>

            {/* Blog 2 */}
            <div className="blog-section">
                <h2 className="blog-section-title">The benefits of meal prepping</h2>
                <p className="blog-section-date">Posted on: February 15, 2020</p>
                <p className="blog-section-description">Meal prepping has become a popular way to stay on track with healthy eating habits. But what exactly is meal prepping, and what are the benefits?</p>
                <p className="blog-section-description">Meal prepping is the process of preparing meals in advance. This can include cooking, portioning out, and even packaging meals for the week. The benefits of meal </p>
            </div>
            <br></br>
        

            {/* Blog 3 */}
            <div className="blog-section">
                <h2 className="blog-section-title">5 Easy Ways to Incorporate More Vegetables into Your Diet</h2>
                <p className="blog-section-date">Posted on: January 15th, 2022</p>
                <p className="blog-section-description">Eating enough vegetables can be a challenge for many people, but it's crucial for maintaining a healthy diet. Here are five simple ways to add more veggies to your meals:</p>
                    <ul>
                        <li>1. Make a big salad to have as a side dish or to add to sandwiches and wraps.</li>
                        <li>2. Add a serving of veggies to your breakfast, such as spinach in your scrambled eggs or avocado on your toast.</li>
                        <li>3. Keep frozen or canned veggies on hand for a quick and easy side dish or to add to soups and stews.</li>
                        <li>4. Incorporate more plant-based meals into your diet, such as veggie stir-fries or meatless pasta dishes.</li>
                        <li>5. Experiment with new vegetables and find ways to prepare them that you enjoy, such as roasting cauliflower or grilling asparagus.</li>
                    </ul>
                    <p>Remember, variety is key when it comes to incorporating more veggies into your diet. Try different types and preparation methods to find what works for you.</p>
            </div>
            <br></br>

                {/* Blog 4 */}
            <div className="blog-section">
                <h2 className="blog-section-title">The Importance of Meal Planning</h2>
                <p className="blog-section-date">Posted on: February 1st, 2022</p>
                <p className="blog-section-description">Meal planning is a simple but effective way to take control of your diet and make sure you're getting the nutrients you need. By planning out your meals in advance, you can ensure that you have healthy options readily available and avoid the temptation of fast food or processed snacks.</p>
                    <ul>
                        <li>1. Plan your meals for the week on the weekend, when you have more time. </li>
                        <li>2. Make a grocery list based on your meal plan, to ensure you have all the ingredients you need on hand. </li>
                        <li>3. Cook large batches of food on the weekend and use leftovers for quick and easy meals during the week. </li>
                        <li>4. Utilize your freezer and store leftovers for future meals. </li>
                    </ul>
            </div>
                                    
        </div>  
    )
};

export default Blog;