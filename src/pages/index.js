import React from "react";
import { graphql } from 'gatsby';

import SEO from "../components/seo";
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Crown Coffee</h1>
  </Layout>
);

export const query = graphql`
{
  ima:file(relativePath:{eq:"cafehero.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`