import React from 'react';
import {Link} from "react-router-dom";
import background from "../images/cars.jpg";



const Discount = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`}} >
            <div className="container" style={{"paddingTop":"10%" }}>
                <h1 className="section-heading text-uppercase text-light font-bolder">DISCOUNT APPLICATION FORM</h1>
                <h3 class="section-subheading text-muted">Please fill in the following form accurately to apply for a discount.</h3>
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
                                        <i className="fas fa-briefcase text-muted"></i>
                                    </span>
                                </div>
                                <input id="job" type="text" name="jobtitle" placeholder="Please enter your occupation" className="form-control bg-white border-md border-left-0 pl-3"/>
                            </div>

                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className="fas fa-briefcase text-muted"></i>
                                    </span>
                                </div>
                                <input id="job" type="text" name="company" placeholder="Please enter name of Company" class="form-control bg-white border-left-0 border-md"/>
                            </div>


                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className="fas fa-briefcase text-muted"></i>
                                    </span>
                                </div>
                                <input id="job" type="text" name="salary" placeholder="Please enter your Annual Salary in &#8358;" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className="fas fa-briefcase text-muted"></i>
                                    </span>
                                </div>
                                <input id="job" type="text" name="lenght" placeholder="How many Years have you worked at this Company?" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className="fas fa-briefcase text-muted"></i>
                                    </span>
                                </div>
                                <input id="job" type="text" name="model" placeholder="Please enter the car model you wish to purchase" class="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className="fas fa-briefcase text-muted"></i>
                                    </span>
                                </div>
                                <input id="job" type="number" name="price" placeholder="Please enter the price of the car in &#8358;" class="form-control bg-white border-left-0 border-md"/>
                            </div>



                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <label>Please upload bank statement for the past 6 months</label>
                                    </span>
                                </div>
                                <input id="job" type="file" name="bank" className="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <label>Please upload Reference letter from Employer</label>
                                    </span>
                                </div>
                                <input id="job" type="file" name="bank" className="form-control bg-white border-left-0 border-md"/>
                            </div>

                            <div className="form-group col-lg-12 mx-auto mb-0">
                                <Link to="/" className="btn btn-primary btn-block py-2">
                                    <span className="font-weight-bold">APPLY!</span>
                                </Link>
                            </div>    
                    
                        </div>
                    </form>
                </div>
            </div> 
        </div> 
    )
}

export default Discount
