import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


import Title from '../global/Title';
import Product from './Product';

const getProducts = graphql`
{
products:allContentfulCoffeeProduct{
    edges{
      node{
        id,
        title,
        price,
        image{
          fluid(maxHeight:430){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`;

const renderProduct = (data) => {
    let items = data.products.edges
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Products" />
                <div className="row">
                    {items.map(({ node: product }) => {
                        return <Product key={product.id} product={product} />
                    })}
                </div>
            </div>
        </section>
    )
};

const Products = () => {
    return (
        <StaticQuery
            query={getProducts}
            render={data => renderProduct(data)}
        >
        </StaticQuery >
    );
}

export default Products;