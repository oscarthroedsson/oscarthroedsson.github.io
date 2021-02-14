import React from "react";
import Button from "../common/Button";
import styles from "./services.module.scss";
import zenfit from "./zenfit.png";

const Services = ({ applicationRef }) => {
  const handleClick = () => {
    applicationRef.current.scrollIntoView();
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("track", "Lead");
      }
    }
  };

  return (
    <section className={styles.container} id="tjanster">
      <div className="container">
        <div className="row dflex align-items-center">
          <div className="col-lg-6 mb-5">
            <h2 className={styles.sub}>Onlinecoachning</h2>
            <h3 className={styles.main}>Livsförändring</h3>
            <p>
              Livsförändringen går ut på att ge dig verktygen för att skapa en
              hållbar förändring så du kan kvarhålla din nya livsstil. Vi skapar
              goda vanor och beteenden. Allt detta gör vi samtidigt som vi
              jobbar för att nå din specifika målsättning efter just dina
              förutsättningar.
            </p>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Anpassat träningsprogram efter dina förutsättningar och
                målsättning, inklusive progression
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Justeringar för att träningen och upplägget ska matcha din
                vardag men även dina framsteg
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Kostupplägg med flera alternativ/måltid, recept för att
                måltiderna ska bli lustfyllda
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Individanpassade råd och kommunikation längs vägen{" "}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Egen app för att kunna logga din träning och framsteg
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Vi jobbar ihop i 6 månader, sedan en månad i taget
              </li>
            </ul>

            <div className="mb-4">
              <span className={styles.price}>1200kr</span> i startavgift, sedan
              3500kr i månaden.
            </div>
            <Button onClick={handleClick} text="Let's go!"></Button>
          </div>
          <div className="col-lg-6">
            <img
              className={styles.productImage}
              alt="Bilder ifrån appen Zenfit som kommer att användas"
              src={zenfit}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
