import React from "react";

import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Menu from "../components/Menu";

const LifeChangePage = () => (
  <Layout>
    <Menu external />
    <Contact showPriceInfo />
  </Layout>
);

export default LifeChangePage;
