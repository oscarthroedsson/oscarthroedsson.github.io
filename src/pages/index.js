import React from "react";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Header from "../components/Header";
import Contact from "../components/Contact";
import aboutImage from "../assets/images/about.jpg";
import testimonial1 from "../assets/images/testimonial1.jpg";
import testimonial2 from "../assets/images/testimonial2.jpg";

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead"></header>

    <section id="vision" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Min vision</h2>
            <p className="text-white-50">
              Tänk dig att du vaknar varje dag med energi att göra det du vill.
              Det tar inte en timme att komma igång på morgonen för att du har
              smärtor. Du orkar gå i trapporna, hänga med barnen, och deras
              tempo är inte längre en utmaning. Du kan känna säkerheten att gå
              till gymmet och improvisera, våga testa nya övningar och inte få
              ont, känslan av att känna sig stark och sätta nya personrekord!
              Tänk om majoriteten av Sveriges befolkning hade varit fysiskt
              aktiva och inte överviktiga! Det är min vision, mitt Sverige!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="vision" className="quote-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p>En start med små steg är början på en större förändring</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-5 col-lg-4">
            <img className="img-fluid mb-3 mb-lg-0" src={aboutImage} alt="" />
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className="featured-text text-center text-lg-left">
              <h2>Om mig</h2>
              <p className="text-black-50 mb-3">
                Med glimten i ögat och ett driv för resultat så ser jag till att
                din träning går framåt men också är rolig på samma gång. Med
                över 10 000h+ på golvet med kunder så har jag fått chansen att
                utveckla träning och kostupplägg för att det ska passa kundens
                behov och förutsättningar. Jag hittar vägar för att människor
                ska bli smärtfria och kunna träna hårt igen.
              </p>
              <p className="text-black-50 mb-3">
                Jag har alltid befunnit mig i miljöer där teamkänslan är viktig.
                Lagsporter var en stor del av min uppväxt och ungdom. Jag
                beslutade mig för att bli tränare och hjälpa personer med deras
                hälsa efter att jag hade jobbat på ett HVB hem. Jag såg andra
                tränare, både fysiskt och online, som jobbade med träning och
                kost men glömde det viktigaste, helheten!
              </p>

              <p className="text-black-50 mb-3">
                Alla kan betala för ett kost- & träningsprogram. Att få allting
                att fungera som leder till resultat är en annan sak. Möjligheten
                att få ta del av en annan persons liv, se över behov och
                förutsättningar för att sen pussla om för att få allting att
                fungera och bli långvarigt. Det är ingen enkel resa, men den
                känslan av att få allting att fungera utefter hur du vill, det
                triggar mig. Jag krigar så länge du krigar. Du avgör hur mycket
                jag investerar i dig. Ge mig 100% så ger jag dig 110%. Valet
                ligger alltid hos individen själv, inte hos
                verktygsleverantören.
              </p>
            </div>
          </div>
        </div>

        <section id="packages" className="packages-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-primary  mb-4">Priser & Paket</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-globe-europe text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Online</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      <ul className="check-list">
                        <li>En sak</li>
                        <li>Två saker</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-city text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Företag</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      <ul className="check-list">
                        <li>Här får man lite fler saker</li>
                        <li>Coola saker ingår</li>
                        <li>Det kommer bli grymt bra!</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-user text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Privat</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      <ul className="check-list">
                        <li>Nu snackar vi</li>
                        <li>Riktigt grymt</li>
                        <li>En annan bra sak</li>
                        <li>???</li>
                        <li>Profit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={testimonial1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-secondary text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-primary">10/10</h4>
                  <p className="mb-0 text-black">
                    Grym PT! Aldrig har jag varit i så bra form som jag är idag.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                  <p className="mb-0 text-black">Kalle Anka</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={testimonial2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-secondary text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-primary">Rekommenderar verkligen</h4>
                  <p className="mb-0 text-black">
                    Oscar vet verkligen vad han håller på med. Jag gick ifrån
                    att sova i hundra år till att ha hur mycket energi som
                    helst.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                  <p className="mb-0 text-black">Törnrosa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="signup-section">
      <Contact />
    </section>
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
