//all links go here to make a SPA application
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({context}) => {
    return (
        <nav id="navbar">
            <Link to="/" id="navbar-text">Home</Link>
            <Link to="/recipes" id="navbar-text">Recipes</Link>
            <Link to="/blog" id="navbar-text">Blog</Link>
            <Link to="/aboutus" id="navbar-text">About Us</Link>
        </nav>
    )
};

export default Navbar;