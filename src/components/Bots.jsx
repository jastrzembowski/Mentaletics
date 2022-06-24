import React from "react";
import Footer from "./Footer";
import Slider from "react-slick";
import carsten from "../images/carsten.jpeg"
import daniel from "../images/daniel.jpeg"
import hans from "../images/hans.jpeg"
import lean from "../images/lean.jpeg"
import marcel from "../images/marcel.jpeg"
import markus from "../images/markus.jpeg"
import max from "../images/max.jpeg"
import nessi from "../images/nessi.jpeg"
import sandy from "../images/sandy.jpeg"
import thor from "../images/Thor.jpeg"
import vanes from "../images/vanes.jpeg"

export default function Bots() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    dots: false,
    arrows: true,
    infinite: false,
    autoplaySpeed: 7000,
    responsive: [
   
      {
        breakpoint: 1080, 
        settings: 'unslick'
      }
    ]
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
              <img src={carsten} alt="person"></img>
              <p>Carsten Stahl</p>
            </div>
            <div className="slider-element">
              <img src={sandy} alt="person"></img>
              <p>Sandy Fahse</p>
            </div>{" "}
            <div className="slider-element">
              <img src={thor} alt="person"></img>
              <p>Thorsten Havener</p>
            </div>{" "}
            <div className="slider-element">
              <img src={vanes} alt="person"></img>
              <p>Vanessa Gebhardt</p>
            </div>{" "}
            <div className="slider-element">
              <img src={lean} alt="person"></img>
              <p>Leandro Barreiro</p>
            </div>{" "}
            <div className="slider-element">
              <img src={marcel} alt="person"></img>
              <p>Marcel Risse</p>
            </div>{" "}
            <div className="slider-element">
              <img src={markus} alt="person"></img>
              <p>Markus Hofmann</p>
            </div>{" "}
            <div className="slider-element">
              <img src={max} alt="person"></img>
              <p>Max Planer</p>
            </div>
            <div className="slider-element">
              <img src={nessi} alt="person"></img>
              <p>Nessi</p>
            </div>
            <div className="slider-element">
              <img src={hans} alt="person"></img>
              <p>Hans Sarpei</p>
            </div>
            <div className="slider-element">
              <img src={daniel} alt="person"></img>
              <p>Daniel Jung</p>
            </div>
          </Slider>
        </div>
      </div> 

      <Footer />
    </>
  );
}
