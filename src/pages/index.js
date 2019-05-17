import React from "react";
import { graphql } from 'gatsby';

import SEO from "../components/seo";
import Layout from '../components/layout';
import BackgroundSection from "../components/global/BackgroundSection";
import Info from '../components/homepage/Info';

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Welcome to Crown Coffee"
      styleClass="default-background" />
    <Info />
  </Layout>
);



export const query = graphql`
  {
    img: file(relativePath: { eq: "cafehero.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
   
  }
`;

// export const query = graphql`
// {
//       img: file(relativePath:{eq: "cafehero.jpeg"}){
//       childImageSharp{
//     fluid{
//       ...GatsbyImageSharpFluid_tracedSVG
//     }
//     }
//   },
//   menu: allContentfulCoffeeItem {
//     edges {
//       node {
//         id
//         title
//         description {
//           description
//         }
//         price
//         category
//         image {
//           fixed(width: 50, height: 50) {
//             ...GatsbyContentfulFixed_tracedSVG
//           }
//         }
//       }
//     }
//   }
// }
// `