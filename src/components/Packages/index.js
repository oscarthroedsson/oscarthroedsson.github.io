import React from "react";
import About from "../About";

const Packages = () => {
  return (
    <section id="packages" className="packages-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-primary mb-4">Tjänster</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-6 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-globe-europe text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Online</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <p>
                    Vill du inte binda upp din tid men fortfarande få ett
                    komplett paket? Genom Online så checkar du in varje söndag
                    när det passar dig. Får alla verktyg som behövs för att du
                    ska nå din målsättning.
                  </p>
                  <h5>Detta ingår</h5>
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
                  <h5>Tillägg</h5>
                  <ul className="check-list">
                    <li>Extra check-in (550kr/tillfälle) </li>
                    <li>Ett extra kostprogram (850kr/st) </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-6 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-dumbbell text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">PT-tillfällen</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <p>
                    Gymmet kan skapa många intryck och det kan vara svårt att
                    koordinera sig. Att hitta tekniken som passar en själv känns
                    ibland omöjligt. Oavsett hinder eller svårigheter löser vi
                    detta tillsammans på plats och tar din hälsa och träning
                    till en ny nivå!
                  </p>
                  <h5>Detta ingår</h5>
                  <ul className="check-list">
                    <li>Träningsprogram (vid behov) + uppdateringar</li>
                    <li>Samtal/sms kontakt </li>
                  </ul>
                  <h5>Tillägg</h5>
                  <ul className="check-list">
                    <li>Kostprogram (850kr/st)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-user text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Privat</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <ul className="check-list">                    
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Packages;
