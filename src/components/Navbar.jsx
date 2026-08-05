import { useEffect, useState } from "react";

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

    /* ===========================================
                    STATE
    =========================================== */

    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const [activeSection, setActiveSection] = useState("home");

    /* ===========================================
                MENU
    =========================================== */

    function closeMenu(){

        setMenuOpen(false);

    }

    /* ===========================================
                SCROLL EFFECT
    =========================================== */

    useEffect(() => {

        function handleScroll(){

            setScrolled(window.scrollY > 30);

            const sections = [

                { id:"hero", value:"home" },

                { id:"about", value:"about" },

                { id:"services", value:"services" },

                { id:"projects", value:"projects" }

            ];

            const scrollPosition = window.scrollY + 150;

            sections.forEach(section => {

                const element = document.getElementById(section.id);

                if(!element) return;

                if(

                    scrollPosition >= element.offsetTop &&
                    scrollPosition < element.offsetTop + element.offsetHeight

                ){

                    setActiveSection(section.value);

                }

            });

        }

        handleScroll();

        window.addEventListener(

            "scroll",

            handleScroll

        );

        return () => {

            window.removeEventListener(

                "scroll",

                handleScroll

            );

        };

    }, []);

    /* ===========================================
                CLOSE MENU ON RESIZE
    =========================================== */

    useEffect(() => {

        function handleResize(){

            if(window.innerWidth > 900){

                setMenuOpen(false);

            }

        }

        window.addEventListener(

            "resize",

            handleResize

        );

        return () => {

            window.removeEventListener(

                "resize",

                handleResize

            );

        };

    }, []);

    return(

        <>

        <nav

            className={`navbar ${scrolled ? "scrolled" : ""}`}

        >

            {/* =======================
                    LOGO
            ======================== */}

           <a
    href="#hero"
    className="navbar-logo-container"
    onClick={closeMenu}
>

    <img
        src={logo}
        alt="RECOGE LTD"
        className="navbar-logo"
    />

    <span className="navbar-logo-meaning">

        Reinforced Construction & Geotechnical Company Ltd

    </span>

</a>

            {/* =======================
                MOBILE BUTTON
            ======================== */}

            <button

                className="menu-toggle"

                onClick={() =>

                    setMenuOpen(prev => !prev)

                }

                aria-expanded={menuOpen}

                aria-controls="main-navigation"

                aria-label="Toggle Navigation"

            >

                {

                    menuOpen

                    ?

                    <FaXmark/>

                    :

                    <FaBars/>

                }

            </button>

            {/* =======================
                    NAVIGATION
            ======================== */}

            <ul

                id="main-navigation"

                className={`nav-links ${menuOpen ? "show-menu" : ""}`}

            >

                <li>

                    <a

                        href="#hero"

                        className="active-link"

                        onClick={closeMenu}

                    >

                        <span className="icon-wrapper">

                            <FaHouse className="nav-icon"/>

                        </span>

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

                        <span className="icon-wrapper">

                            <FaBuilding className="nav-icon"/>

                        </span>

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

                        <span className="icon-wrapper">

                            <FaScrewdriverWrench className="nav-icon"/>

                        </span>

                        Services

                    </button>

                </li>

                <li>

                    <a

                       

                        onClick={closeMenu}

                    >

                        <span className="icon-wrapper">

                            <FaHelmetSafety className="nav-icon"/>

                        </span>

                        Our Work

                    </a>

                </li>

                <li>
                     <button

                        className="contact-button" id="conta"

                        onClick={() => {

                            openContact();

                            closeMenu();

                        }}

                    >

                        <FaEnvelope/>

                        Contact Us

                    </button>
                </li>

            </ul>

           
        </nav>

       

        </>

    );

}

export default Navbar;