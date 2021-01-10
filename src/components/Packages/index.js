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
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card py-4 h-100">
              <div className="card-body">
                <div className="text-center">
                  <i className="fas fa-dumbbell text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">PT Online Grupp</h4>
                </div>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <p className="text-left">
                    Gör din resa med likasinnade. Tillsammans delar vi
                    frågeställningar och lösningar för att slippa göra resan
                    ensam. Det blir även roligare och mer lärorikt.
                  </p>
                  <h5>Detta ingår</h5>
                  <ul className="check-list">
                    <li>
                      <span className="font-weight-bold">Analys</span>
                      <p>
                        Jag analyserar din ansökan och din situation samt ger en
                        rekommendation var du ska börja för att göra
                        investeringen långsiktig.
                      </p>
                    </li>

                    <li>
                      <span className="font-weight-bold"> Check-in</span>
                      <p>
                        Jag ser över dina anteckningar i appen onsdagar och
                        söndagar. Därför är det viktigt att du fyller i appen,
                        annars finns det inget att checka för mig.
                      </p>
                    </li>

                    <li>
                      <span className="font-weight-bold">
                        1-3 Träningsprogram
                      </span>
                      <p>
                        Du förses med ett program utifrån din målsättning.
                        Baserat på din målsättning får du 1-3 program under sex
                        månader. Du kan även välja att lägga till fler program
                        eller justeringar än dessa tre eller med en större
                        frekvens.
                      </p>
                    </li>
                    <li>
                      <span className="font-weight-bold">Kostprogram</span>
                      <p>
                        Anpassas efter allergier eller kosthållning. Ges med tre
                        alternativ per måltid. Inga justeringar under perioden.
                      </p>
                    </li>
                    <li>
                      <span className="font-weight-bold">
                        Kommunikation via app
                      </span>
                      <p>
                        Du blir inbjuden att ladda ned en app. I appen finns
                        ditt träningsprogram med instruktionsvideos. Efter varje
                        pass kan du göra anteckningar och jag är kontaktbar via
                        meddelandefunktionen i appen. Jag kollar meddelande på
                        onsdagar och söndagar.
                      </p>
                    </li>
                    <li>
                      <span className="font-weight-bold">
                        Facebook- och Messengergrupp
                      </span>
                      <p>
                        I gruppen kan du ladda upp vidoes på din träning eller
                        hur din resa går. Eftersom vi alla är likasinnade och
                        utgår från en liknande startposition så kommer vi
                        motivera och inspirera varandra. Vi alla startar
                        samtidigt, du behöver verkligen inte har uppnått något
                        för att vara en inspiratör eller motivatör. Detta är
                        även en chans att få lite extra hjälp av mig men även
                        andra deltagare under veckans gång.
                      </p>
                    </li>
                  </ul>
                  <h5>Tillägg</h5>
                  <p>
                    Mina rekommendationer kommer att utgå från gruppens
                    utgångsläge och inte sälja på en massa tillägg. Känner du
                    att dessa tillägg kan passa dig så kan du absolut lägga till
                    dem.
                  </p>
                  <ul className="check-list">
                    <li>
                      Byte av träningsprogram (utöver det som ges):
                      1000kr/program
                    </li>
                    <li>Nytt kostprogram: 1000kr/program. </li>
                    <li>Justering kostprogram: 800kr/justering.</li>
                  </ul>
                  <h5>Prisinformation*</h5>
                  <p>Startavgift: engångsavgift 1200kr</p>
                  <p>Månadsavgift: + 500kr/månad</p>
                  <p>Månadspris för gruppen: 3500kr</p>
                  <p className="font-italic">*Alla priser är inklusive moms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-7">
            <div className="card py-4 h-100">
              <div className="card-body">
                <div className="text-center">
                  <i className="fas fa-globe-europe text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">PT Online 1 on 1</h4>
                </div>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <p className="text-left">
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
                  <h5>Tillägg*</h5>
                  <ul className="check-list">
                    <li>Extra check-in (550kr/tillfälle) </li>
                    <li>Ett extra kostprogram (850kr/st) </li>
                  </ul>
                  <p className="font-italic">*Alla priser är inklusive moms</p>
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
