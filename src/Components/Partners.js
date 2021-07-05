import React from 'react';
// import background from "../images/cars.jpg";
import mercedes from "../images/mercedes.jpg";
import toyota from "../images/toyota.jpg";
import bmw from "../images/bmw.jpg";
import hyundai from "../images/hyundai.jpg";
import volks from "../images/volks.jpg";
import honda from "../images/honda.jpg";
import audi from "../images/audi.jpeg";
import ford from "../images/ford.jpg";

const Partners = () => {
    return (
        <div style={{ "backgroundColor": "blue"}} >
            <section className="page-section bg-light" id="portfolio" style={{ "marginTop":"50px" }} >
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase text-muted">OUR PARTNERS</h2>
                        <h3 className="section-subheading text-muted ">Our discount codes work for all underlisted car models.</h3>
                    </div>
                    <div className="row">
                        <div className="col-xs-8 col-md-3 mb-4">
                            <div className="portfolio-item" >
                                    <img className="img-fluid"  src={mercedes} alt="..." />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Mercedes Benz</div>
                                    <div className="portfolio-caption-subheading text-muted">Abuja & Lagos only</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-md-3 mb-4">
                            <div className="portfolio-item">
                                    <img className="img-fluid" src={toyota} alt="..." />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Toyota</div>
                                    <div className="portfolio-caption-subheading text-muted">All dealers in Nigeria</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-md-3 mb-4">
                            <div className="portfolio-item">
                                    <img className="img-fluid" src={bmw} alt="..." />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">BMW</div>
                                    <div className="portfolio-caption-subheading text-muted">Abuja only</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-md-3 mb-4">
                            <div className="portfolio-item">
                                    <img className="img-fluid" src={volks} alt="..." />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Volkwagen</div>
                                    <div className="portfolio-caption-subheading text-muted">Lagos only</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-md-3 mb-4">
                            <div className="portfolio-item">
                                    <img className="img-fluid" src={honda} alt="..." />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Honda</div>
                                    <div className="portfolio-caption-subheading text-muted">All Registered Stores in Nigeria</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-md-3">
                            <div className="portfolio-item">
                                    <img className="img-fluid" src={hyundai} alt="..." />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Hyundai</div>
                                    <div className="portfolio-caption-subheading text-muted">All Registered Stores in Nigeria</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-md-3">
                            <div className="portfolio-item">
                                    <img className="img-fluid" src={audi} alt="..." />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Audi</div>
                                    <div className="portfolio-caption-subheading text-muted">All Registered Stores in Nigeria</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-md-3">
                            <div className="portfolio-item">
                                    <img className="img-fluid" src={ford} alt="..." />
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Ford</div>
                                    <div className="portfolio-caption-subheading text-muted">Calabar only</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default Partners
