import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../images/icons/logo1.png"

export default function Navbar() {
  return (
    <nav>
      
     <Link to="/">   <img src={logo1} alt="person"></img></Link> 
      <ul>
        <li>
          <Link to="/funktionierts"> So <br/>Funktioniert´s </Link>
        </li>
        <li>
          <Link to="/infos"> Infos für <br/>Unternehmen</Link>
        </li>
        <li>
          <Link to="/team"> Unser <br/>Team</Link>
        </li>

        <li>
          <Link to="/sponsorinnen"> Sponsorinnen <br/> & Sponsoren</Link>
        </li>

        <li>
          <Link to="/botschafter"> Botschafter:innen</Link>
        </li>
      </ul>

      
        <a href="https://youngster.ec3l.com/badges" className="main-button">jetzt registrieren</a>
   
    </nav>
  );
}
