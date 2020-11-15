import React from "react";
import Layout from "../components/common/Layout";
import SEO from "../components/common/Seo";
import Hero from "../components/common/Hero";
import Vision from "../components/sections/Vision";
import StartQuote from "../components/sections/StartQuote";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Vision />
    <StartQuote />
  </Layout>
);

export default IndexPage;
