import React from 'react';
import Title from '../global/Title';
import Image from 'gatsby-image';

const filterCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category
    });
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories = ['all', ...categories];
    return categories;
};

class Menu extends React.Component {
    state = {
        items: this.props.items.edges,
        coffeeItems: this.props.items.edges,
        categories: filterCategories(this.props.items.edges)
    };

    handleItems = (category) => {
        let tempItems = [...this.state.items];
        if (category === 'all') {
            this.setState(() => {
                return { coffeeItems: tempItems }
            })
        } else {
            let items = tempItems.filter(({ node }) => node.category === category)
            this.setState(() => {
                return { coffeeItems: items }
            })
        }
    };

    renderItems = () => {
        if (this.state.items.length > 0) {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Our Menu" />
                        {/* categories */}
                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-center">
                                {this.state.categories.map((category, index) => {
                                    return (<button onClick={() => this.handleItems(category)} className="btn btn-yellow text-capitalize" type="button" key={index}>{category}</button>)
                                })}
                            </div>
                        </div>
                        {/* items */}
                        <div className="row">
                            {this.state.coffeeItems.map(({ node }) => {
                                return (
                                    <div
                                        key={node.id}
                                        className="col-11 col-md-6 my-3 d-flex mx-auto">
                                        <div>
                                            <Image
                                                fixed={node.image.fixed}
                                            />
                                        </div>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0"><small>{node.title}</small></h6>
                                                <h6 className="mb-0 text-yellow"><small>
                                                    ${node.price}</small></h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>{node.description.description}</small>
                                            </p>
                                        </div>

                                    </div>
                                )
                            })}
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
        console.log(this.state.categories)
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default Menu;