import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/agb">
          <p>AGB</p>
        </Link>
        <Link to="/datenschutz">
          <p>Datenschutz</p>
        </Link>
        <Link to="/imprissum">
          <p>Impressum</p>
        </Link>
      </div>
    </footer>
  );
}
