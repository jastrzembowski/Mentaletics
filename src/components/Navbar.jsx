import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo1 from "../images/icons/logo1.png";

export default function Navbar() {
  function unCheck() {
    document.getElementById("menu-btn").checked = false;
  }
  return (
    <nav>
      <Link to="/">
        <img src={logo1} alt="person"></img>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu nav-container" onClick={(e) => unCheck()}>
      <li className="main-small">
          <a href="https://youngster.ec3l.com/badges">jetzt registrieren</a>
        </li>
        <li>
          <NavLink
            to="/funktionierts"
            className={({ isActive }) => (isActive ? "nav-active" : "nav-n")}
          >
           So Funktioniert&nbsp;´s
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/infos"
            className={({ isActive }) => (isActive ?  "nav-active" : "nav-n")}
          >
            Infos für Unternehmen
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className={({ isActive }) => (isActive ? "nav-active" : "nav-n")}
          >
            Unser Team
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/sponsorinnen"
            className={({ isActive }) => (isActive ?  "nav-active" : "nav-n")}
          >
            Sponsorinnen &&nbsp;Sponsoren
          </NavLink>
        </li>

        <li>
        <nobr><NavLink
            to="/botschafter"
            className={({ isActive }) => (isActive ?  "nav-active" : "nav-n")}
          >
           Botschafter:innen
          </NavLink></nobr>
        </li>
        
      </ul>

      <a href="https://youngster.ec3l.com/badges" className="main-button nav-but">
        jetzt&nbsp;registrieren
      </a>
    </nav>
  );
}
