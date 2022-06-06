import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-icons"></div>
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
