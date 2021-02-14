import React, { useRef } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Header from "../components/Header";
import Contact from "../components/Contact";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Hero from "../components/common/Hero";
import Menu from "../components/Menu";

const IndexPage = () => {
  const applicationRef = useRef(null);

  return (
    <Layout>
      <Menu />
      <Hero id="vision">
        <div className="col-lg-10 mx-auto d-flex align-items-center flex-column text-center">
          <h2 className="mb-4">Min vision</h2>
          <p>
            Tänk dig att du vaknar varje dag med energi att göra det du vill.
            Det tar inte en timme att komma igång på morgonen för att du har
            smärtor. Du orkar gå i trapporna, hänga med barnen, och deras tempo
            är inte längre en utmaning. Du kan känna säkerheten att gå till
            gymmet och improvisera, våga testa nya övningar och inte få ont,
            känslan av att känna dig stark och sätta nya personrekord! Tänk om
            majoriteten av Sveriges befolkning hade varit fysiskt aktiva och
            inte överviktiga - det är min vision!
          </p>
        </div>
      </Hero>
      <Testimonials></Testimonials>
      <About applicationRef={applicationRef}></About>
      <Services applicationRef={applicationRef}></Services>
      <Contact applicationRef={applicationRef} />
      <Newsletter></Newsletter>
      <SocialLinks />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
