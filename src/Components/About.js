import React from 'react';
import background from "../images/cars.jpg";
import registerpic from "../images/register.png";
import uploadpic from "../images/upload.jpg";
import discountpic from "../images/discount.jpeg";
import dreampic from "../images/dreampic.jpeg";
import {Link} from "react-router-dom";


const Services = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`,"marginBottom":"5%" }}>
            <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase text-light font-bolder">About Us</h2>
                    {/* <h3 className="section-subheading text-muted">Our Services.</h3> */}
                </div>
                <div className="row text-center">
                    <p className="lh-lg text-light" >Founded in 1987 by the GoodyBag brothers, our establishment has been serving up ingenuine  and Central America. We are dedicated to travelling the world, finding the best wood, and bringing back to you here in our store.</p>
                    <div class="d-grid gap-2 col-3 mx-auto">
                        <Link to="/Discount" className="btn btn-light btn-md text-uppercase text-info fw-bolder">Get Started!</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-section" id="about"   >
            <div className="container text-light">
                <div className="text-center text-light" >
                    <h2 className="section-heading text-uppercase" >How It Works</h2>
                    {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img class="rounded-circle img-fluid" src={registerpic} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Step 1</h4>
                                <h4 className="subheading">Register/LogIn</h4>
                            </div>
                            <div className="timeline-body"><p class="text-light">Create an account, or Log in to get Started.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img class="rounded-circle img-fluid" src={uploadpic} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Step 2</h4>
                                <h4 className="subheading">Upload Documents</h4>
                            </div>
                            <div className="timeline-body"><p class="text-light">Upload all required documents. Uploading the documents accurately, and in the correct format makes processing times shorter.</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img class="rounded-circle img-fluid" src={discountpic} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Step 3</h4>
                                <h4 className="subheading">Receive Discount Code</h4>
                            </div>
                            <div className="timeline-body"><p class="text-light">After 3-5 working days of processing your application, a discount code is generated, and sent to you via e-mail. It can also be assessed on your account page.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img class="rounded-circle img-fluid" src={dreampic} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Step 4</h4>
                                <h4 className="subheading">Go get your dream car!</h4>
                            </div>
                            <div className="timeline-body"><p class="text-light">Once you receive your code, take it to your preferred dealer and your dream car is yours at an alarming discount!</p></div>
                        </div>
                    </li>
                </ul>
                <div class="d-grid gap-2 col-3 mx-auto">
                        <Link to="/Discount" className="btn btn-light btn-md text-uppercase text-info fw-bolder">Get that discount now!</Link>
                </div>            
            </div>
        </section>
        </div>
    )
}

export default Services
