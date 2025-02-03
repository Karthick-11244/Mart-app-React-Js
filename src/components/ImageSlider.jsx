import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../imageslider.css"
// import slider images dynamically
import image1 from "../images/hero-img.png"
import image2 from "../images/watch-07.png"
import image3 from "../images/phone-08.png"
import image4 from "../images/wireless-01.png"

// im using the node package for slider slick package
const ImageSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="banner">
            <div style={{ width: "80%", margin: "auto"}}>
                <Slider {...settings}>
                    <div className="d-flex">
                        <h1 className="heading mt-5">50% Off For Your  <br />  First Shopping<p className="para fs-6">Lorem epturi accusantium modi! Dolorem nobis eius sit similique illum at, placeat omnis neque atque quae iure maiores fugit placeat omnis neque atque quae.</p> <button className="btn ">Visit collections</button></h1>
                        <img src={image1} alt="Slide 1" style={{ width: "45%" }} />
                    </div>
                    <div className="d-flex">
                        <h1 className="heading mt-5">50% Off For Your  <br />  First Shopping<p className="para fs-6">Lorem epturi accusantium modi! Dolorem nobis eius sit similique illum at, placeat omnis neque atque quae iure maiores fugit placeat omnis neque atque quae.</p> <button className="btn ">Visit collections</button></h1>
                        <img src={image2} alt="Slide 2" style={{ width: "30%" }} />
                    </div>
                    <div className="d-flex">
                        <h1 className="heading mt-5">50% Off For Your  <br />  First Shopping<p className="para fs-6">Lorem epturi accusantium modi! Dolorem nobis eius sit similique illum at, placeat omnis neque atque quae iure maiores fugit placeat omnis neque atque quae.</p> <button className="btn ">Visit collections</button></h1>
                        <img src={image3} alt="Slide 3" style={{ width: "45%" }} />
                    </div>
                    <div className="d-flex">
                        <h1 className="heading mt-5">50% Off For Your  <br />  First Shopping<p className="para fs-6">Lorem epturi accusantium modi! Dolorem nobis eius sit similique illum at, placeat omnis neque atque quae iure maiores fugit placeat omnis neque atque quae.</p> <button className="btn ">Visit collections</button></h1>
                        <img src={image4} alt="Slide 1" style={{ width: "45%" }} />
                    </div>
                  
        
                </Slider>
                </div>
                </div>
          

    );
}

export default ImageSlider;