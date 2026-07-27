import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

        <nav className="navbar">

            <div className="logo">

                <h1>RECOGE</h1>

                <p>CONSTRUCTION</p>

            </div>

            <button

                className="menu-toggle"

                onClick={() => setMenuOpen(!menuOpen)}

            >

                {

                    menuOpen ?

                    <FaTimes />

                    :

                    <FaBars />

                }

            </button>

            <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>

                <li>

                    <a
                        href="#hero"
                        onClick={closeMenu}
                    >

                        <button className="active">

                            Home

                        </button>

                    </a>

                </li>

                <li>

                    <button

                        onClick={() => {

                            openAbout();

                            closeMenu();

                        }}

                    >

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

                        Services

                    </button>

                </li>

                <li>

                    <a
                        href="#projects"
                        onClick={closeMenu}
                    >

                        <button>

                            Our Work

                        </button>

                    </a>

                </li>

                <li>

                    <button

                        onClick={() => {

                            openContact();

                            closeMenu();

                        }}

                    >

                        Contact Us

                    </button>

                </li>

            </ul>

        </nav>

    );

}

export default Navbar;