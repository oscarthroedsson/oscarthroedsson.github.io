import React, { useState } from "react";
import Scroll from "../Scroll";

const Packages = () => {
  const [groupExpanded, setGroupExpanded] = useState(false);
  const [oneOnOneExpanded, setOneOnOneExpanded] = useState(false);

  return (
    <section id="tjanster" className="packages-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-primary mb-4">Tjänster</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card h-100">
              <div className="card-body">
                <div className="text-center">
                  <i className="fas fa-dumbbell text-primary mb-2"></i>
                  <h3 className="text-uppercase m-0">Livsförändringen</h3>
                </div>

                <p className="small text-black-50 mt-3">
                  Gå med Livsförändringen som startar 15/2 och varar i sex
                  månader. Livsförändringen handlar om att vi ska hitta de unika
                  verktygen som fungerar för dig så du når din målsättning. Jag
                  vet att du har försökt innan, ibland kan det behövas ett
                  bollplank som du kan bolla de hinder och problem som dyker upp
                  längs vägen för att du ska hålla dig på banan.
                </p>
              </div>

              <h4
                className="expand text-center"
                onClick={() => setGroupExpanded(!groupExpanded)}
              >
                Detta ingår
              </h4>

              <div
                className={`small text-black-50 expandable ${
                  groupExpanded ? "expanded" : ""
                }`}
              >
                <div className="card-body">
                  <ul className="check-list">
                    <li>Check-in via en app 2ggr/vecka</li>
                    <li>Träningsprogram: 3-5 dagar/veck</li>
                    <li>Genomförs på gym eller utomhusgym</li>
                  </ul>
                  <h4>Tillägg</h4>
                  <ul className="check-list">
                    <li>Kostprogram</li>
                    <li>Extra check-in</li>
                  </ul>
                  <h4>Prisinformation*</h4>
                  <p>Startavgift: 1200kr</p>

                  <p>Månadspris: 3500kr</p>
                  <p className="font-italic">*Alla priser är inklusive moms</p>
                </div>
                <div className="row d-flex justify-content-center mb-5">
                  <Scroll type="id" element="anmalan">
                    <a href="#anmalan" className="btn btn-primary">
                      Ansök
                    </a>
                  </Scroll>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-7">
            <div className="card h-100">
              <div className="card-body">
                <div className="text-center">
                  <i className="fas fa-globe-europe text-primary mb-2"></i>
                  <h3 className="text-uppercase m-0">PT Online 1 on 1</h3>
                </div>
                <p className="small text-black-50 mt-4">
                  Vill du inte binda upp din tid men fortfarande få ett komplett
                  paket? Genom Online så checkar du in varje söndag när det
                  passar dig. Får alla verktyg som behövs för att du ska nå din
                  målsättning.
                </p>
              </div>

              <h4
                className="expand text-center"
                onClick={() => setOneOnOneExpanded(!oneOnOneExpanded)}
              >
                Detta ingår
              </h4>

              <div
                className={`small text-black-50 expandable ${
                  oneOnOneExpanded ? "expanded" : ""
                }`}
              >
                <div className="card-body">
                  <ul className="check-list">
                    <li>Träningsprogram</li>
                    <li>
                      Kostprogram (med recept, 2-3 alt/måltid) - anpassat efter
                      allergier och vald kosthållning
                    </li>
                    <li>1 check-in/vecka</li>
                    <li>Program som trackar din progress</li>
                    <li>Löpande kommunikation via program</li>
                  </ul>
                  <h4>Tillägg*</h4>
                  <ul className="check-list">
                    <li>Extra check-in (550kr/tillfälle) </li>
                    <li>Ett extra kostprogram (850kr/st) </li>
                  </ul>
                  <p className="font-italic">*Alla priser är inklusive moms</p>
                </div>
                <div className="row d-flex justify-content-center mb-5">
                  <Scroll type="id" element="anmalan">
                    <a href="#anmalan" className="btn btn-primary">
                      Ansök
                    </a>
                  </Scroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
