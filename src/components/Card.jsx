import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
    const features = [
        { title: "Free Shipping", icon: <i class="fa-solid fa-car"></i>, bgColor: "#ebd9d1" },
        { title: "Safe Payment", icon: <i class="fa-solid fa-wallet"></i>, bgColor: "#c3f0f7" },
        { title: "Secure Payment", icon: <i class="fa-solid fa-shield"></i>, bgColor: "#c6eba0" },
        { title: "Back Guarantee", icon: <i class="fa-solid fa-headphones"></i>, bgColor: "#c3f0f7" },
    ];

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                {features.map((feature, index) => (
                    <div key={index} className="col-md-3 col-sm-6">
                        <div className="card text-center  p-3" style={{ background: feature.bgColor }}>
                            <div className="card-body">
                                <div className="display-4 mb-2">{feature.icon}</div>
                                <h5 className="card-title">{feature.title}</h5>
                                <p className="card-text ">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;