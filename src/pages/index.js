import React from "react";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Vision from "../components/Vision";
import About from "../components/About";
import Packages from "../components/Packages";

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead" id="page-top"></header>

    <Vision></Vision>

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
