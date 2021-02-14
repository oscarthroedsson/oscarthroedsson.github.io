import React from "react";
import aboutImage from "./about.jpg";
import Button from "../common/Button";
import styles from "./about.module.scss";

const About = ({ applicationRef }) => {
  const handleClick = () => {
    applicationRef.current.scrollIntoView();
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("track", "Lead");
      }
    }
  };

  return (
    <section id="om" className={`${styles.about} bg-light`}>
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-5 col-lg-4">
            <img className="img-fluid mb-3 mb-lg-0" src={aboutImage} alt="" />
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className={`${styles.featuredText} text-center text-lg-left`}>
              <h2>Om mig</h2>
              <p className="text-black-50 mb-3">
                Med glimten i ögat och ett driv för resultat så ser jag till att
                din träning går framåt men också är rolig på samma gång. Med
                över 7500 timmar på golvet med kunder så har jag fått chansen
                att utveckla träning och kostupplägg för att det ska passa
                kundens behov och förutsättningar. Tillsammans hittar vi vägen
                för att du ska lyckas.
              </p>
              <p className="text-black-50 mb-3">
                Jag förespråkar långsiktighet. En plan ska sättas utifrån
                förutsättningar och behov, inte enbart en persons vilja. Ofta är
                en vilja eller önskan en bild på kommande slutdestination. Den
                visar inte vägen eller vilka redskap som ska användas och hur de
                ska användas. Med min erfarenhet inom HVB-verksamhet och med
                tidigare kunder så är bilden ganska klar. De som investerar tid
                i sin förändring är de som lyckas. Hur många gånger tidigare har
                du försökt tills du kom över min sida?
              </p>

              <p className="text-black-50 mb-3">
                Jag är inte PTn som kommer att skrika på dig eller berätta allt
                du gör fel. Snedsteg kommer att ske, och det är okej. Jag kommer
                att stötta dig oavsett svårigheter och jag ger inte upp så länge
                du inte gör det. Ett huvud är smart, men två är smartare och
                tillsammans kommer vi att lyckas.
              </p>
              <p className="text-black-50 mb-3">Redo för nästa steg?</p>
              <Button onClick={handleClick} text="Jag är redo!"></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
