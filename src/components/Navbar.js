import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import Home from './Home';
import Feature from './Feature';
import Testimonial from './Testimonial';
import Contact from './Contact';
 

export default class Navbar extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <nav className=" pink lighten-1 white-text ">
                    <div className="nav-wrapper container">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#!" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link activeClass="active"
                                            to="/"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >Home</Link></li>
                            <li>
                                <Link activeClass="active"
                                            to="/Feature"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}> Feature </Link></li>
                            <li>
                                <Link activeClass="active"
                                            to="/Testimonial"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >Testimonial</Link></li>
                            <li>
                                <Link activeClass="active"
                                            to="/Contact"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >Contact</Link></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Feature">Feature</Link></li>
                            <li><Link to="/Testimonial">Testimonial</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
               
        </div>



</BrowserRouter>
        )
    }
}

