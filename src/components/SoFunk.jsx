import React from "react";
import Footer from "./Footer";

export default function SoFunk() {
  return (
    <>
      <div className="sofunk-container">
        <h1>"WIe bekomme ich meinen Persönlichen Zugang?"</h1>
        <p>
          Erzähle deinen Eltern oder Erziehungsberechtigten von unserem Kurs und
          besprich mit Ihnen, ob du an der Verlosung teilnehmen darfst.* Dann
          bewirb dich direkt mit deiner E-Mail-Adresse und deinem Namen für die
          Verlosung eines Platzes in unserem YOUNGSTER -Programm.
        </p>
        <div className="sofunk-icons__box">
          <div className="sofunk-icons__holder">
            <img src="https://via.placeholder.com/150" alt="person"></img>

            <p>
              Bewirb dich mit deiner E-Mail-Adresse und deinem Namen für die
              Verlosung
            </p>
          </div>
          <div className="sofunk-icons__holder">
            <img src="https://via.placeholder.com/150" alt="person"></img>

            <p>
              Du bekommst dann von uns eine Bestätigungs-Mail mit einem Link
            </p>
          </div>
          <div className="sofunk-icons__holder">
            <img src="https://via.placeholder.com/150" alt="person"></img>

            <p>
              Schließe deine Registrierung ab, indem du auf den Link in der Mail
              klickst
            </p>
          </div>
          <div className="sofunk-icons__holder">
            <img src="https://via.placeholder.com/150" alt="person"></img>

            <p>
              Sobald ein Code verfügbar ist, bekommst du diesen in einer
              weiteren Mail zugeschickt
            </p>
          </div>
        </div>
        <p>
          Und jetzt heißt es erst einmal abwarten. Unter allen Anmeldungen
          verlosen wir 100.000 kostenlose Plätze für unser YOUNGSTER-Programm.
          Wenn du dabei bist, informieren wir dich direkt per E-Mail. Du kannst
          aber bereits heute auf unserer YOUNGSTER-Plattform vielfältige
          Inhalte, Übungen und Podcasts mit spannenden Menschen genießen -
          vollkommen kostenfrei und ohne Verpflichtung. Teste sie direkt unter
          <a href="https://youngster.ec3l.com/badges" className="main-link">
            {" "}
            youngster.mentaletics.com{" "}
          </a>
        </p>

        <a className="main-button">jetzt bewerben</a>
        <p>
          *die Teilnahme ist vollkommen kostenfrei und verpflichtet zu nichts.
          Wir wollen weder deine Daten, noch wollen wir dich mit Werbung
          zuspammen! Unser Ziel ist es, einfach 100.000 Jugendlichen den Zugang
          zu wertvollem Know-how zu ermöglichen.
        </p>

        <h1>"Wann bekomme ich meinen Code?"</h1>
        <p className="main-text__small">
          Du hast leider noch keinen der kostenlosen Plätze erhalten, möchtest
          aber schon einmal anfangen?
          <br />
          <br /> Das ist kein Problem! Unter
          <a href="https://youngster.ec3l.com/badges" className="main-link">
            {" "}
            youngster.mentaletics.com{" "}
          </a>{" "}
          kannst du dich jederzeit für unsere Community registrieren und schon
          auf vielfältige Inhalte und Übungen zugreifen, welche wir für dich
          jederzeit erweitern und aktualisieren.
          <br />
          <br />
          Wir freuen uns schon, gemeinsam mit dir durchzustarten.
        </p>
        <h1>"Wo und wie löse ich den code ein?"</h1>
        <p>
          Den Code einlösen kannst du unter
          <a href="https://youngster.ec3l.com/badges" className="main-link">
            youngster.mentaletics.com{" "}
          </a>
          . Hier musst du dich mit deiner E-Mail registrieren und erhältst
          Zugriff auf eine Vielzahl an Artikeln, Übungen und spannenden Podcasts
          von Sharon mit coolen Gästen.
          <br />
          <br /> Gleichzeitig findest du hier alle Kurse - unter anderem auch
          das YOUNGSTER-Programm - welches du mit deinem Code freischalten
          kannst.
          <br />
          <br /> Wir wünschen dir viel Spaß bei MENTALetics®!
        </p>

        <div className="main-button" style={{ marginBottom: "150px" }}>
          {" "}
          Jetzt einlösen
        </div>
      </div>

      <Footer />
    </>
  );
}
