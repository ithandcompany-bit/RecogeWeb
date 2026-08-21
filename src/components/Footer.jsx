import "../styles/footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,

    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,

    FaChevronRight,

    FaMountain,
    FaFlask,
    FaHardHat,
    FaDraftingCompass,
    FaMapMarkedAlt

} from "react-icons/fa";

import logo from "../assets/images/logo.png";

function Footer({

    openAbout,

    openServices,

    openContact,

    scrollToProjects

}){

    function scrollToTestimonials(){

        document

            .getElementById("testimonials")

            ?.scrollIntoView({

                behavior:"smooth"

            });

    }

    return(

<footer className="footer">

<div className="footer-top-line"></div>

<div className="footer-container">

{/* =====================================
            COMPANY
===================================== */}

<div className="footer-company">

    <div className="footer-logo-wrapper">

        <img

            src={logo}

            alt="RECOGE LTD"

            className="footer-logo"

        />

    </div>

    <p>

        RECOGE Ltd provides trusted geotechnical engineering,
    geotechnical investigations, construction materials testing,
    engineering consultancy and surveying services for residential,
    commercial and infrastructure projects across Rwanda.

    </p>

   

</div>

{/* =====================================
            COMPANY
===================================== */}

<div className="footer-column">

<h3>

Company

</h3>

<ul>

<li>

<button onClick={openAbout}>

<FaChevronRight className="footer-arrow"/>



About Us

</button>

</li>

<li>

<button onClick={scrollToProjects}>

<FaChevronRight className="footer-arrow"/>

Our Work

</button>

</li>

<li>

<button onClick={scrollToTestimonials}>

<FaChevronRight className="footer-arrow"/>

Testimonials

</button>

</li>

<li>

<button onClick={openContact}>

<FaChevronRight className="footer-arrow"/>

Contact

</button>

</li>

</ul>

</div>

{/* =====================================
            SERVICES
===================================== */}

<div className="footer-column">

    <h3>

        Services

    </h3>

    <ul>

        <li>

            <button onClick={openServices}>

               <FaChevronRight className="footer-arrow"/>

Geotechnical Studies & Material Testing

            </button>

        </li>

        <li>

            <button onClick={openServices}>

                <FaChevronRight className="footer-arrow"/>

               Civil Engineering & Archtectural Design

            </button>

        </li>

        <li>

            <button onClick={openServices}>

               <FaChevronRight className="footer-arrow"/>

               Geological & Hydrological Studies

            </button>

        </li>

        <li>

            <button onClick={openServices}>

               <FaChevronRight className="footer-arrow"/>

               Property Management and General Supply

            </button>

        </li>

        <li>

            <button onClick={openServices}>

                <FaChevronRight className="footer-arrow"/>

                Land Surveying

            </button>

        </li>

    </ul>

</div>

{/* =====================================
            CONTACT
===================================== */}

<div className="footer-column">

    <h3>

        Contact

    </h3>

    <div className="footer-contact">

        <div className="footer-contact-item">

            <span className="footer-icon">

                <FaMapMarkerAlt/>

            </span>

            <div>

                <h4>

                    Address

                </h4>

                <p>

                    <a href="https://maps.app.goo.gl/r4EAv3EVis2J5nCB9" target="_blank">Kicukiro, Kigali, Rwanda, KK 649 St, Gate No 24</a>


                </p>

            </div>

        </div>

       <div className="footer-contact-item">

    <span className="footer-icon">

        <FaPhoneAlt/>

    </span>

    <div>

        <h4>

            Phone

        </h4>

        <a href="tel:+250783159615">
    (+250) 783 159 615
</a>

    </div>

</div>

       <div className="footer-contact-item">

    <span className="footer-icon">

        <FaEnvelope/>

    </span>

    <div>

        <h4>

            Email

        </h4>

        <a href="mailto:recogeltd@gmail.com">

            recogeltd@gmail.com

        </a>

    </div>

</div>

        <div className="footer-contact-item">

            <span className="footer-icon">

                <FaClock/>

            </span>

            <div>

                <h4>

                    Working Hours

                </h4>

                <p>

                    Monday - Friday

                    <br/>

                    08:00 AM - 05:00 PM

                </p>

            </div>

        </div>

    </div>

</div>

</div>

{/* =====================================
            FOOTER BOTTOM
===================================== */}

<div className="footer-bottom">

    <div className="footer-social">

        <a href="#" aria-label="Facebook">

            <FaFacebookF/>

        </a>

        <a href="#" aria-label="Instagram">

            <FaInstagram/>

        </a>

        <a href="#" aria-label="LinkedIn">

            <FaLinkedinIn/>

        </a>

    </div>

    <p>

        © 2026 RECOGE LTD. All Rights Reserved.

    </p>

    <span>

        Engineering Excellence Across Rwanda

    </span>

</div>

</footer>

    );

}

export default Footer;