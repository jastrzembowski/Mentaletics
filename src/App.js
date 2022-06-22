import React, { useRef, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import emailjs from "@emailjs/browser";

function App() {
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
    <div className="bg-holder">
      <div className="main-container">
        <h1>Aktion 100.000</h1>
        <p>
          Kennst du das Gefühl, wenn du in herausfordernden Situationen deine
          Stärken nicht abrufen kannst? Oder kennst du deine Stärken vielleicht
          noch gar nicht? Würdest du gerne an dich glauben, wenn scheinbar
          keiner mehr an dich glaubt? Dann ist MENTALetics® Youngster genau das
          Richtige für dich, um die Person zu werden, die du gerne sein
          möchtest! Beim YOUNGSTER-Programm nimmst du an einem exklusiven
          Mentaltraining teil, welches ganz auf die Bedürfnisse von Jugendlichen
          zugeschnitten ist. Mit dem YOUNGSTER-Programm von MENTALetics®
          entdeckst du deine persönlichen Stärken und kannst sie aktivieren,
          wann immer du sie brauchst. Bewirb dich jetzt für einen von 100.000
          Plätzen in unserem MENTALetics YOUNGSTER-Kurs. Werde schon morgen zur
          / zum Mentalathlet:in und lerne, wie du zukünftig alle Situationen in
          deinem Alltag meistern kannst, egal wie herausfordernd diese sind.
        </p>
        <h3>Deine Vorteile im Überblick:</h3>
        <ul>
          <li>
            Du erhältst innovative und kreative Tools, die dir deine Stärken
            immer wieder vor Augen führen
          </li>
          <li>
            Du erlebst, wie du deine blockierenden Gefühle aufbrechen kannst und
            schwere Situationen rockst
          </li>
          <li>
            Du schaffst es, negative Gedanken zu stoppen und diese in kraftvolle
            Gedanken zu verwandeln
          </li>
          <li>
            Erfahre die besten Tipps & Tricks für mehr Selbstvertrauen von
            unseren Expert:innen
          </li>
          <li>Gehe motiviert und selbstbewusst aus unserem Kurs heraus</li>
          <li>
            Verfolge endlich deine Ziele und überwinde innere Zweifel und Ängste
          </li>
          <li>
            Lerne, wie du auch in stressigen und herausfordernden Situationen
            gelassen bleibst
          </li>
        </ul>
        <p>
          Absolviere den Kurs in deinem eigenen Tempo - wann du willst und wo du
          willst. Du profitierst durch die Gelegenheit von Profis zu lernen und
          ungestört Fragen zu stellen. Mentaletics ist hierbei dein Safe Space!
          Alles, was dich beschäftigt und was du lernst, ist nur und
          ausschließlich für dich einsehbar! <br />
          <br /> Melde dich direkt auf youngster.mentaletics.com an und
          profitiere von vielfältigen, kostenfreien und immer wieder aktuellen
          Inhalten. Mit etwas Glück erhältst du einen von 100.000 kostenlosen
          Zugängen* und wirst in nur sechs Wochen zur / zum Mentalathlet:in.{" "}
          <br />
          <br />
          Also bewirb dich direkt hier!
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
        <p className="main-bottom__text">
          Folgende Exklusiv-Partner unterstützen die „Aktion 100.000“ in
          vielfältiger Art und Weise und stellen so die Zugänge zum
          Youngster-Programm für Jugendliche zur Verfügung:
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
