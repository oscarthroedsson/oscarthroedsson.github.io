import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Button from "../components/common/Button";
import Hero from "../components/common/Hero";

const IndexPage = () => (
  <Layout>
    <Header logoOnly />
    <Hero>
      <div className="mx-auto text-center">
        <h1 className="mx-auto text-uppercase">Sidan kunde inte hittas</h1>
        <Button link="/" text="Hem" className="mt-3 d-inline-block"></Button>
      </div>
    </Hero>
  </Layout>
);

export default IndexPage;
