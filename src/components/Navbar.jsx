import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../images/icons/logo1.png";

export default function Navbar() {
  function unCheck() {
    document.getElementById("menu-btn").checked = false;
  }
  return (
    
    <nav >
      <Link to="/">
        <img src={logo1} alt="person"></img>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu nav-container"  onClick={(e) => unCheck()}>
        <li>
          <Link to="/funktionierts">
            So 
            Funktioniert´s{" "}
          </Link>
        </li>
        <li>
          <Link to="/infos">
            Infos für 
            Unternehmen
          </Link>
        </li>
        <li>
          <Link to="/team">
            Unser
            Team
          </Link>
        </li>

        <li>
          <Link to="/sponsorinnen">
            Sponsorinnen & Sponsoren
          </Link>
        </li>

        <li>
          <Link to="/botschafter"> Botschafter:innen</Link>
        </li>
        <li className="main-small">
        <a href="https://youngster.ec3l.com/badges" >
        jetzt registrieren
      </a>
        </li>
      </ul>

      <a href="https://youngster.ec3l.com/badges" className="main-button">
        jetzt registrieren
      </a>
    </nav>
  );
}
