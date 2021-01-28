import React from "react";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Header from "../components/Header";
import Contact from "../components/Contact";
import About from "../components/About";
import Packages from "../components/Packages";

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead" id="vision">
      <div className="container d-flex h-100 align-items-center">
        <div className="col-lg-10 mx-auto d-flex align-items-center flex-column text-center">
          <h2 className="mb-4">Min vision</h2>
          <p>
            Tänk dig att du vaknar varje dag med energi att göra det du vill.
            Det tar inte en timme att komma igång på morgonen för att du har
            smärtor. Du orkar gå i trapporna, hänga med barnen, och deras tempo
            är inte längre en utmaning. Du kan känna säkerheten att gå till
            gymmet och improvisera, våga testa nya övningar och inte få ont,
            känslan av att känna sig stark och sätta nya personrekord! Tänk om
            majoriteten av Sveriges befolkning hade varit fysiskt aktiva och
            inte överviktiga! Det är min vision, mitt Sverige!
          </p>
        </div>
      </div>
    </header>

    <section className="quote-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p>En start med små steg är början på en större förändring</p>
          </div>
        </div>
      </div>
    </section>

    <About></About>
    <Packages></Packages>
    {/* <Testimonials></Testimonials> */}
    <Contact />
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
