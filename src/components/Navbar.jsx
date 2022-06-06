import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      
     <Link to="/">   <img src="https://via.placeholder.com/100" alt="person"></img></Link> 
      <ul>
        <li>
          <Link to="/funktionierts"> So Funktioniert´s </Link>
        </li>
        <li>
          <Link to="/infos"> Infos für Unternehmen</Link>
        </li>
        <li>
          <Link to="/team"> Unser Team</Link>
        </li>

        <li>
          <Link to="/sponsorinnen"> Sponsorinnen & Sponsoren</Link>
        </li>

        <li>
          <Link to="/botschafter"> Botschafter:innen</Link>
        </li>
      </ul>

      
        <a href="https://youngster.ec3l.com/badges" className="main-button">jetzt registrieren</a>
   
    </nav>
  );
}
