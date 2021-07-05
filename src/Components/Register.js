import React from 'react';
import background from "../images/cars.jpg";
import {Link} from "react-router-dom";


const Register = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`}} >
        <div className="container" style={{"paddingTop":"10%" }}>
            <h1 className="section-heading text-uppercase text-light font-bolder">REGISTER/CREATE ACCOUNT</h1>
            <h3 class="section-subheading text-muted">Please fill in the following form to register and create an account with Easycars.com.</h3>
            <div className="col-lg-10 col-lg-6 ml-auto">
                <form>
                    <div className="row">
                        <div className="input-group col-lg-6 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="firstName" type="text" name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md"/>
                        </div>

                        <div className="input-group col-lg-6 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="lastName" type="text" name="lastname" placeholder="Last Name" class="form-control bg-white border-left-0 border-md"/>
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-envelope text-muted"></i>
                                </span>
                            </div>
                            <input id="email" type="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md"/>
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-phone-square text-muted"></i>
                                </span>
                            </div>
                            <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3"/>
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-phone-square text-muted"></i>
                                </span>
                            </div>
                            <input id="job" type="text" name="username" placeholder="Enter Username" className="form-control bg-white border-md border-left-0 pl-3"/>
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-phone-square text-muted"></i>
                                </span>
                            </div>
                            <input id="job" type="password" name="password" placeholder="Enter New Password" className="form-control bg-white border-md border-left-0 pl-3"/>
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-phone-square text-muted"></i>
                                </span>
                            </div>
                            <input id="job" type="password" name="passwordConfirmation" placeholder="Confirm New Password" className="form-control bg-white border-md border-left-0 pl-3"/>
                        </div>


                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fas fa-briefcase text-muted"></i>
                                </span>
                            </div>
                            <input id="job" type="date" name="jobtitle" placeholder="Please enter your Date of Birth" className="form-control bg-white border-md border-left-0 pl-3"/>
                        </div>

                        <div className="input-group col-lg-6 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <label>Please upload bank a valid means of identification</label>
                                </span>
                            </div>
                            <input id="job" type="file" name="bank" className="form-control bg-white border-left-0 border-md"/>
                        </div>

                        <div className="form-group col-lg-12 mx-auto mb-0">
                            <Link to="/" className="btn btn-primary btn-block py-2">
                                <span className="font-weight-bold">REGISTER</span>
                            </Link>
                        </div>    
                
                    </div>
                </form>
            </div>
        </div> 
    </div> 

    )
}

export default Register
