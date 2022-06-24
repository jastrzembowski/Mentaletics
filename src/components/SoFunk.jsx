import React, { useRef, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function SoFunk() {
  const form = useRef();
  const [isActive, setIsActive] = useState(true);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hdeddls",
        "template_6vqtdde",
        form.current,
        "Fwu-YC9ODO89HFfJw"
      )
      .then(
        setIsActive(!isActive)
        );
  };

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
            <i class="fa-solid fa-user-plus"></i>
            <p>
              Bewirb dich mit deiner E-Mail-Adresse und deinem Namen für die
              Verlosung
            </p>
          </div>
          <div className="sofunk-icons__holder">
            <i class="fa-solid fa-envelope-circle-check"></i>
            <p>
              Du bekommst dann von uns eine Bestätigungs-Mail mit einem Link
            </p>
          </div>
          <div className="sofunk-icons__holder">
            <i class="fa-solid fa-link"></i>
            <p>
              Schließe deine Registrierung ab, indem du auf den Link in der Mail
              klickst
            </p>
          </div>
          <div className="sofunk-icons__holder">
            <i class="fa-solid fa-gift"> </i>{" "}
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

        { isActive &&
        <form ref={form} onSubmit={sendEmail} className="form-holder">
          <div className="input-box">
            {" "}
            <input type="text" name="user_name" required placeholder="NAME" />
            <input
              type="email"
              name="user_email"
              required
              placeholder="E-MAIL-ADRESSE"
            />
          </div>{" "}
          <input type="submit" className="submit-button" value="jetzt bewerben" />
        </form>
}
{!isActive && 
  <p className="input-after">
    Vielen Dank! Deine Registrierungs-Mail sollte innerhalb weniger Minuten ankommen. Bitte bestätige deine Registrierung durch Klicken auf den Link in der Mail.
  </p>
}
        <p className="sofunk-inf">
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
            {" "}
            youngster.mentaletics.com
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

        <Link to="/">
          {" "}
          <div className="main-button main-bot-but" style={{ marginBottom: "150px" }}>
            Jetzt einlösen
          </div>{" "}
        </Link>
      </div>

      <Footer />
    </>
  );
}
