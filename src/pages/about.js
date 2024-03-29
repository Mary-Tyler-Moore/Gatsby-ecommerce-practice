import React from "react";
import { graphql } from 'gatsby';

import SEO from "../components/seo";
import Layout from '../components/layout';
import BackgroundSection from "../components/global/BackgroundSection";
import Info from '../components/homepage/Info';

export default ({ data }) => (
  <Layout>
    <SEO title="About Us" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Crown Coffee"
      styleClass="about-background" />
    <Info />
  </Layout>
);

export const query = graphql`
{
      img: file(relativePath:{eq: "abouthero.jpg"}){
      childImageSharp{
    fluid{
      ...GatsbyImageSharpFluid_tracedSVG
    }
    }
  }
}
`