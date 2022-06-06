import React from "react";
import Footer from "./Footer";
export default function Team() {
  return (
    <>
      <div className="team-container">
        <h1>Lerne unser Team kennen</h1>
        <p>
          Wir freuen uns, dich hier begrüßen zu dürfen. Denn dort, wo du heute
          stehst, standen wir alle auch schon einmal: vor Selbstzweifeln,
          Ängsten und dem Gefühl, den Herausforderungen des Alltags nicht
          gerecht zu werden. Das ist für einen Erwachsenen nicht leicht. Wie
          soll es dann einem jungen Menschen wie dir gehen? Besonders die
          Coronapandemie hat Jugendlichen unfassbar vieles zugemutet. Lockdowns,
          Homeschooling, Social Distancing und die Ungewissheit, wie es denn nun
          weitergehen soll. All das kann dich ganz schön aus der Bahn werfen.
          Aber lass dir eines sagen: wir wissen nicht nur, wie sich das anfühlt,
          sondern auch, wie du gestärkt wieder aus solch einer Situation heraus
          kommst. Denn unser Team hat in den letzten 10 Jahren schon oft anderen
          Menschen dabei geholfen, den Herausforderungen des Alltags durch
          mentale Stärke zu begegnen. Deshalb wollen wir unser Wissen nun mit
          dir und 99.999 weiteren jungen Menschen teilen und das kostenlos!<br/><br/> Wir
          laden dich ein, bei unserem YOUNGSTER-Programm mitzumachen und ein:e
          Mentalathlet:in zu werden! So kannst du jede noch so große
          Herausforderung mit Leichtigkeit und Gelassenheit angehen.
        </p>
        <div className="team-img__box">
          <div className="team-img__holder">
          <img src="https://via.placeholder.com/300" alt="person"></img>
            <h3>Sharon Paschke</h3>
            <p>
              Sharon Paschke ist Mentaltrainer und Sportmentor. Sharon hat als
              Kind selbst die Erfahrung gemacht, wie es sich anfühlt,
              Selbstzweifel zu haben oder von Herausforderungen übermannt zu
              sein. Doch er hat einen Weg gefunden, diese zu überwinden. Diese
              Erfahrung hat ihn dazu bewogen, sich als Mentaltrainer ausbilden
              zu lassen und anderen mit seinem Wissen auf empathische Art
              weiterzuhelfen.
            </p>
          </div>
          <div className="team-img__holder">
          <img src="https://via.placeholder.com/300" alt="person"></img>

            <h3>Christian Pander</h3>
            <p>
              Als ehemaliger Fußballprofi und Sportmentor kennt sich Christian
              bestens mit Themen wie Lampenfieber, sozialem Druck oder
              Niederlagen aus. Während seiner Karriere ist er durch Höhen und
              Tiefen gegangen und hat dabei vieles für sich gelernt. Wie man mit
              stressigen Situationen und Rückschlägen umgeht, musste er selbst
              lernen und teilt seine Erfahrungen und Tipps nun bei MENTALetics.
            </p>
          </div>

          <div className="team-img__holder">
          <img src="https://via.placeholder.com/300" alt="person"></img>

            <h3>Clara Fabry</h3>
            <p>
              Clara ist als Mentaltrainerin und Sportmentorin mit Herz und Seele
              bei MENTALetics dabei. Mit viel Empathie erklärt sie in unseren
              Kursvideos, wie Kinder und Jugendliche unsere Methoden zur
              Stärkung ihres Selbstwertgefühls einsetzen und an
              Herausforderungen wachsen können. Auch für Fragen hat Clara immer
              ein offenes Ohr und motiviert unsere Youngster auf ihrem Weg zu
              mentaler Stärke.
            </p>
          </div>
        </div>

        <p className="team-bottom__text">Hast du noch Fragen?</p>
        <div className="main-button team-button">Kontaktiere uns gerne!</div>
      </div>
      <Footer/>
    </>
  );
}
