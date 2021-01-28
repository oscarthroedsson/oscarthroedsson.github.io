import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Contact from "../components/Contact";

const LifeChangePage = () => (
  <Layout>
    <Header logoOnly />
    <Contact showPriceInfo />
  </Layout>
);

export default LifeChangePage;
