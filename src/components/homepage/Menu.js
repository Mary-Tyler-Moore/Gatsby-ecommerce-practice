import React, { useState, useEffect } from 'react';
import Title from '../global/Title';
import Image from 'gatsby-image';

class Menu extends React.Component {
    state = {
        items: this.props.items.edges,
        coffeeItems: this.props.items.edges
    }
    renderItems = () => {
        if (this.state.items.length > 0) {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Our Menu" />
                        <div className="row mb-5">
                            <div className="col">
                                <h1>These are our itmes</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Our Menu" />
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h1>There are no items to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default Menu;