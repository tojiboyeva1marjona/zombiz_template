import React from 'react'
import './style.css'
import logo from "../../assets/logo.png";

const Menu = () => {
    return (
        <div>
            <section id="menu">
                <div class="container">
                    <div class="menubar">
                        <nav class="navbar navbar-default">


                            <div class="navbar-header">

                                <a class="navbar-brand" href="index.html">
                                    <img style={{ marginTop: -30 }} src={logo} alt="logo" />
                                </a>
                            </div>



                            <div className='d-flex gap-5 menu_li'>
                                <li class="active"><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="service.html">Service</a></li>
                                <li><a href="project.html">Project</a></li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li>
                                    <a href="#">
                                        <span class="lnr lnr-cart"></span>
                                    </a>
                                </li>
                                <li class="search">


                                    <span class="lnr lnr-magnifier"></span>

                                </li>

                            </div>
                        </nav>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Menu