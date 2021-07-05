import React from 'react';
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; EasyCars.com 2021</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <Link to="#!" className="btn btn-dark btn-social mx-2"><i class="fab fa-twitter"></i></Link>
                        <Link to="#!" className="btn btn-dark btn-social mx-2"><i class="fab fa-facebook-f"></i></Link>
                        <Link to="#!" className="btn btn-dark btn-social mx-2"><i class="fab fa-linkedin-in"></i></Link>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <Link to="#!" className="link-dark text-decoration-none me-3">Privacy Policy</Link>
                        <Link to="#!" className="link-dark text-decoration-none">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>   
        </div>
    )
}

export default Footer
