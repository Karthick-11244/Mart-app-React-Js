import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {

    return (
        <footer style={{ backgroundColor: "#224b99", color: "white", padding: "20px", }}>
            <div className="container">
                <div className="row ">
                    {/* Mart Section */}
                    <div className="col-md-3 py-5">
                        <h5 className="fw-bold "><i class="fa-solid fa-bag-shopping"></i> Mart</h5>
                        <p className="text-white-50">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                        </p>
                    </div>

                    {/* About Us */}
                    <div className="col-md-3 py-5">
                        <h5 className="fw-bold">About Us</h5>
                        <ul className="list-unstyled ">
                            <li className="mb-2"><a href="#" className=" text-decoration-none  text-white-50">Careers</a></li>
                            <li className="mb-2"><a href="#" className=" text-decoration-none  text-white-50">Our Stores</a></li>
                            <li className="mb-2"><a href="#" className=" text-decoration-none  text-white-50">Our Cares</a></li>
                            <li className="mb-2"><a href="#" className=" text-decoration-none  text-white-50">Terms & Conditions</a></li>
                            <li className="mb-2"><a href="#" className=" text-decoration-none  text-white-50">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div className="col-md-3 py-5">
                        <h5 className="fw-bold">Customer Care</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className=" text-decoration-none  text-white-50">How to Buy</a></li>
                            <li className="mb-2"><a href="#" className=" text-decoration-none  text-white-50">Track Your Order</a></li>
                            <li className="mb-2"><a href="#" className=" text-decoration-none text-white-50">Corporate & Bulk Purchasing</a></li>
                            <li className="mb-2"><a href="#" className=" text-decoration-none text-white-50">Help Center</a></li>
                            <li className="mb-2"><a href="#" className=" text-decoration-none  text-white-50">Returns & Refunds</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="col-md-3 py-5">
                        <h5 className="fw-bold">Contact Us</h5>
                        <p className="text-white-50">
                            1/166 East Street,kalloorani,TamilNadu
                        </p>
                        <p className=" text-white-50">Email:mskarthick8769@gmail.com</p>
                        <p className=" text-white-50">Phone: +91 6382168769</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;