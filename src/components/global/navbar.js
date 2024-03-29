import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/logosvg.svg'
import { FaCartArrowDown } from 'react-icons/fa'

import '../../styles/bootstrap.min.css'
import * as styles from '../../styles/Layout.module.scss'

export default class Navbar extends Component {

    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: '/',
                text: 'home'
            },
            {
                id: 2,
                path: '/about',
                text: 'crown coffee'
            }
        ],

    }

    navbarHendler = () => {
        this.state.navbarOpen ? this.setState({
            navbarOpen: false,
            css: 'collapse navbar-collapse'
        }) : this.setState({
            navbarOpen: true,
            css: 'collapse navbar-collapse show'
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <Link to="/">
                    <img className={styles.Gridcontainer__navbox_logobox_logo} src={Logo} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.navbarHendler}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto">
                        {this.state.links.map(link => {
                            return (
                                <li className="nav-item" key={link.id}><Link className="nav-link  text-capitalize" to={link.path}>{link.text}</Link></li>
                            )
                        })}
                        <li className="nav-item ml-sm-5"><FaCartArrowDown className="cart-icon snipcart-checkout" /></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

