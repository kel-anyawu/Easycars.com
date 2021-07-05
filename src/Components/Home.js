import React from 'react';
import {Link} from "react-router-dom";
import background from "../images/cars.jpg";


const Home = () => {
    return (
        <div>
            <header className="masthead" style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
                <div className="masthead-subheading text-light">Welcome To EasyCars!</div>
                <div className="masthead-heading text-uppercase text-light">Your Dream Car Awaits You.</div>
                <Link to="/Discount" className="btn btn-light btn-xl text-uppercase text-info fw-bolder">Apply a discount on your Car Purchase</Link>
            </div>
        </header>
        </div>
    )
}

export default Home;
