import React from "react";
import { graphql } from 'gatsby';

import SEO from "../components/seo";
import Layout from '../components/layout';
import BackgroundSection from "../components/global/BackgroundSection";

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Welcome to Crown Coffee"
      styleClass="default-background" />

  </Layout>
);

export const query = graphql`
{
      img: file(relativePath:{eq: "cafehero.jpeg"}){
      childImageSharp{
    fluid{
      ...GatsbyImageSharpFluid_tracedSVG
    }
    }
  }
}
`