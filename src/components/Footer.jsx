import React from "react";
import { NavLink } from "react-router-dom";
import fb from "../images/icons/Facebook.png";
import insta from "../images/icons/Instagram.png";
import link from "../images/icons/LinkedIn.png";
import mail from "../images/icons/Mail.png";
import yt from "../images/icons/YouTube.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/sharon-paschke-1506a3209/">
          <img src={link} alt="link icon"></img>
        </a>
        <a href="https://www.facebook.com/kompassmentaletics">
          <img src={fb} alt="fb icon"></img>
        </a>
        <a href="https://www.instagram.com/christianpander/">
          <img src={insta} alt="insta icon"></img>
        </a>
        <a href="https://www.youtube.com/channel/UC3wh7EIGjZUt7lLEcQInaUw">
          <img src={yt} alt="yt icon"></img>
        </a>
        <a href="mailto:team@mentaletics.com">
          <img src={mail} alt="mail icon"></img>
        </a>
      </div>
      <div className="footer-text">
      <NavLink
        to="/agb"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >AGB</NavLink>
         <NavLink
        to="/datenschutz"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
       Datenschutz
       </NavLink>
       <NavLink
        to="/imprissum"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
   
          Impressum
        </NavLink>
      </div>
    </footer>
  );
}
