// Imports
import React from "react";
import { Link } from "react-router-dom";

// Component
const Navbar = ({context}) => {
    return (
        <nav class="navbar">
            <Link to="/" id="navbar-text">Home</Link>
            <Link to="/departments" id="navbar-text">Recipes</Link>
            <Link to="/blog" id="navbar-text">Blog</Link>
            <Link to="/aboutus" id="navbar-text">About Us</Link>
            <Link to="/search" id="navbar-text">Search</Link>
        </nav>
    )
};

// Export
export default Navbar;