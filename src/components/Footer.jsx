import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

function Footer({
    openAbout,
    openServices,
    openContact,
    scrollToProjects
}) {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Company */}

                <div className="footer-column footer-company">

                    <h2>RECOGE</h2>

                    <span>CONSTRUCTION</span>

                    <p>

                        Building stronger communities through
                        innovative construction, quality craftsmanship
                        and dependable project delivery.

                    </p>

                    <div className="footer-social">

                        <a href="#">
                            <FaFacebookF />
                        </a>

                        <a href="#">
                            <FaInstagram />
                        </a>

                        <a href="#">
                            <FaLinkedinIn />
                        </a>

                    </div>

                </div>

                {/* Quick Links */}

                <div className="footer-column">

                    <h3>Quick Links</h3>

                    <ul>

                        <li>
                            <button onClick={openAbout}>
                                About Us
                            </button>
                        </li>

                        <li>
                            <button onClick={openServices}>
                                Services
                            </button>
                        </li>

                        <li>
                            <button onClick={scrollToProjects}>
                                Our Work
                            </button>
                        </li>

                        <li>
                            <button onClick={openContact}>
                                Contact
                            </button>
                        </li>

                    </ul>

                </div>


                {/* Contact */}

                <div className="footer-column">

                    <h3>Contact Us</h3>

                    <div className="footer-contact">

                        <p>

                            <FaMapMarkerAlt />

                            Kigali, Rwanda

                        </p>

                        <p>

                            <FaPhoneAlt />

                            +250 788 123 456

                        </p>

                        <p>

                            <FaEnvelope />

                            info@recogeconstruction.com

                        </p>

                        <p>

                            <FaClock />

                            Mon - Fri | 8:00 AM - 5:00 PM

                        </p>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <p>

                    © 2026 Recoge Construction. All Rights Reserved.

                </p>

            </div>

        </footer>

    );

}

export default Footer;