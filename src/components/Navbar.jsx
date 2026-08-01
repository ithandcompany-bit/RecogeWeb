import { useState } from "react";

import {
    FaBars,
    FaXmark,
    FaHouse,
    FaBuilding,
    FaScrewdriverWrench,
    FaHelmetSafety,
    FaEnvelope
} from "react-icons/fa6";

import logo from "../assets/images/logo.png";

import "../styles/navbar.css";

function Navbar({

    openAbout,
    openServices,
    openContact

}) {

    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {

        setMenuOpen(false);

    }

    return (

        <>

        <nav className="navbar">

            {/* Logo */}

            <a
                href="#hero"
                className="navbar-logo-container"
                onClick={closeMenu}
            >

                <img

                    src={logo}

                    alt="Recoge Ltd"

                    className="navbar-logo"

                />

            </a>

            {/* Mobile Button */}

            <button

                className="menu-toggle"

                onClick={() => setMenuOpen(!menuOpen)}

                aria-label="Toggle navigation"

            >

                {

                    menuOpen ?

                    <FaXmark />

                    :

                    <FaBars />

                }

            </button>

            {/* Navigation */}

            <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>

               <li>

    <a
        href="#hero"
        className="active-link"
        onClick={closeMenu}
    >

        <FaHouse className="nav-icon"/>

        Home

    </a>

</li>

                <li>

                    <button

                        onClick={() => {

                            openAbout();

                            closeMenu();

                        }}

                    >

                        <FaBuilding className="nav-icon"/>

                        About Us

                    </button>

                </li>

                <li>

                    <button

                        onClick={() => {

                            openServices();

                            closeMenu();

                        }}

                    >

                        <FaScrewdriverWrench className="nav-icon"/>

                        Services

                    </button>

                </li>

                <li>

                    <a

                        href="#projects"

                        onClick={closeMenu}

                    >

                        <FaHelmetSafety className="nav-icon"/>

                        Our Work

                    </a>

                </li>

                <li>

                    <button

                        className="contact-button"

                        onClick={() => {

                            openContact();

                            closeMenu();

                        }}

                    >

                        <FaEnvelope className="nav-icon"/>

                        Contact Us

                    </button>

                </li>

            </ul>

        </nav>


<div className="nav-overlay"></div>

</>

    );

}

export default Navbar;