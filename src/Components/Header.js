import React from 'react';
import {Link} from "react-router-dom";
import weblogo from "../images/Easycarslogo11.png";
// import background from "../images/cars.jpg";



const Header = () => {
    return (
        <div style={{ "height" : "40px"}}>
           <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <Link to="/" className="navbar-brand"><img src={weblogo} alt="..." style = {{"height" : "30%", "marginBottom" : "30px"}} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse " id="navbarResponsive" >
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><Link to="/" class="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/About"  className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/Discount"  className="nav-link" >Apply for Discount</Link></li>
                        <li className="nav-item"><Link to="/Partners"  className="nav-link">Our Partners</Link></li>
                        <li className="nav-item"><Link to="/Contact"  className="nav-link">Contact</Link></li>
                        <li className="nav-item"><Link to="/Login"  className="nav-link"><i class="fas fa-user-plus"></i>Register/LogIn</Link></li>
                    </ul>
                </div>
            </div>
        </nav> 
        
        </div>
    )
}

export default Header
