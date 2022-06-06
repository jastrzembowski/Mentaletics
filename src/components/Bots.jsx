import React from "react";
import Footer from "./Footer";
import Slider from "react-slick";

export default function Bots() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    dots: false,
    arrows: false,
    infinite: true,
  };
  return (
    <>
      <div className="bots-container">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          velit mollitia inventore id minima illum incidunt recusandae ullam
          nisi omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Maiores, sit.
        </p>
        <div className="slider-box">
          <Slider {...settings}>
            <div className="slider-element">
              <img src="https://via.placeholder.com/300" alt="person"></img>
              <p>Carsten Stahl</p>
            </div>
            <div className="slider-element">
              <img src="https://via.placeholder.com/300" alt="person"></img>
              <p>Carsten Stahl</p>
            </div>{" "}
            <div className="slider-element">
              <img src="https://via.placeholder.com/300" alt="person"></img>
              <p>Carsten Stahl</p>
            </div>{" "}
            <div className="slider-element">
              <img src="https://via.placeholder.com/300" alt="person"></img>
              <p>Carsten Stahl</p>
            </div>{" "}
            <div className="slider-element">
              <img src="https://via.placeholder.com/300" alt="person"></img>
              <p>Carsten Stahl</p>
            </div>{" "}
            <div className="slider-element">
              <img src="https://via.placeholder.com/300" alt="person"></img>
              <p>Carsten Stahl</p>
            </div>{" "}
            <div className="slider-element">
              <img src="https://via.placeholder.com/300" alt="person"></img>
              <p>Carsten Stahl</p>
            </div>{" "}
            <div className="slider-element">
              <img src="https://via.placeholder.com/300" alt="person"></img>
              <p>Carsten Stahl</p>
            </div>
          </Slider>
        </div>
      </div> 

      <Footer />
    </>
  );
}
