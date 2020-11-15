import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import aboutImage from '../assets/images/about.jpg';
import testimonial1 from '../assets/images/testimonial1.jpg';
import testimonial2 from '../assets/images/testimonial2.jpg';

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
              smärtor. Du orkar gå i trapporna, hänga med barnen, deras tempo är
              inte längre en utmaning. Känna säkerheten att gå till gymmet och
              improvisera, våga testa nya övningar och inte få ont, känslan att
              känna sig stark, sätta nya person rekord! Tänk om majoriteten av
              Sveriges befolkning hade varit fysiskt aktiva och inte
              överviktiga! Det är min vision, mitt Sverige!
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
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={aboutImage} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h2>Om mig</h2>
              <p className="text-black-50 mb-0">
                Bacon ipsum dolor amet ham doner shank porchetta, landjaeger
                chuck short ribs beef ribs sirloin. Andouille doner tail shank
                ball tip cupim boudin chislic filet mignon alcatra tenderloin.
                Bacon bresaola meatloaf corned beef pig boudin frankfurter.
                Brisket leberkas jerky cow boudin kielbasa tail beef ribs
                shankle sausage shoulder pork belly burgdoggen strip steak
                tongue. Rump brisket strip steak fatback jerky, shankle
                hamburger sirloin ground round shank ham hock drumstick.
                Kielbasa alcatra landjaeger pork belly tenderloin venison
                biltong ground round meatball. Pork belly biltong pastrami
                alcatra kielbasa kevin meatloaf shankle jerky spare ribs pork
                loin tenderloin ham.
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
                    <i className="fas fa-hands-helping text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Paket 1</h4>
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
                    <i className="fas fa-dumbbell text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Paket 2</h4>
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
                    <i className="fas fa-gem text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Paket 3</h4>
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
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <h2 className="text-white mb-5">Kontakt</h2>

            <form>
              <div className="row">
                <div className="form-group col-md-6">
                  <label className="text-white" htmlFor="firstName">
                    Förnamn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                  ></input>
                </div>
                <div className="form-group col-md-6">
                  <label className="text-white" htmlFor="lastName">
                    Efternamn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label className="text-white" htmlFor="email">
                    E-post
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                  ></input>
                </div>

                <div className="form-group col-md-6">
                  <label className="text-white" htmlFor="phone">
                    Telefonnummer
                  </label>
                  <input type="tel" className="form-control" id="phone"></input>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mx-auto">
                Skicka
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
