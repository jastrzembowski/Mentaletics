import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Sponsor() {
  return (
    <>
      <div className="sponsor-container">
        <h1>100.000 mal danke!</h1>
        <p>
          Unser Dank gilt unseren großzügigen Sponsor:innen, durch die es uns
          möglich gemacht wird, dieses Projekt in die Realität umzusetzen.
          Gemeinsam mit vielen verantwortungsvollen Unternehmen gelingt es uns,
          100.000 Kinder und Jugendliche mit mentalem Training ganz unmittelbar
          zu unterstützen. Ebenso großer Dank gilt unseren Multiplikator:innen,
          welche dafür sorgen, dass wir eine immense Reichweite erlangen konnten
          und Kinder und Jugendliche auch wirklich erreichen.<br/><br/> Wir bedanken uns
          ganz herzlich für Ihr Engagement und sind sehr demütig, gemeinsam mit
          Ihnen an dieser so wichtigen Mission zu arbeiten!
        </p>

        <p className="spons-text">
          Ihr Unternehmen möchte auch einer unserer Sponsor:innen werden?
        </p>
           <Link to="/" style={{marginBottom: "100px"}}><span className="main-button" > mehr erfahren</span> </Link>
   
           </div>

      <Footer />
    </>
  );
}
