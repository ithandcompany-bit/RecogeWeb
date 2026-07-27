import Modal from "../components/Modal";
import "../styles/contactModal.css";

import {
    FaPhone,
    FaWhatsapp,
    FaLinkedin,
    FaLocationDot
} from "react-icons/fa6";

function ContactModal({ close }) {

    return (

        <Modal close={close} title="Get In Touch With Us">

            <div className="contact-popup">

            
                <div className="contact-popup-divider"></div>

                <div className="contact-popup-content">

                    {/* LEFT SIDE */}

                    <div className="contact-left">

                        <h2>

                            Contact Information

                        </h2>

                        <p className="contact-intro">

                            We'd love to hear about your project.
                            Reach us through any of the channels below.

                        </p>

                        <div className="contact-line"></div>

                        <div className="contact-card">

                            <FaPhone className="contact-icon"/>

                            <div>

                                <h3>

                                    Phone

                                </h3>

                                <p>

                                    +250 788 123 456

                                </p>

                            </div>

                        </div>

                        <div className="contact-line"></div>

                        <div className="contact-card">

                            <FaWhatsapp className="contact-icon"/>

                            <div>

                                <h3>

                                    WhatsApp

                                </h3>

                                <a
                                    href="https://wa.me/250788123456"
                                    target="_blank"
                                    rel="noreferrer"
                                >

                                    Start Conversation

                                </a>

                            </div>

                        </div>

                        <div className="contact-line"></div>

                        <div className="contact-card">

                            <FaLinkedin className="contact-icon"/>

                            <div>

                                <h3>

                                    LinkedIn

                                </h3>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >

                                    Visit our Company Page

                                </a>

                            </div>

                        </div>

                        <div className="contact-line"></div>

                        <div className="contact-card">

                            <FaLocationDot className="contact-icon"/>

                            <div>

                                <h3>

                                    Office Location

                                </h3>

                                <p>

                                    KG 7 Avenue<br/>

                                    Nyarutarama<br/>

                                    Kigali, Rwanda

                                </p>

                            </div>

                        </div>

                        <div className="contact-map-wrapper">

                            <iframe

                                className="contact-map"

                                title="Location"

                                loading="lazy"

                                allowFullScreen

                                src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"

                            ></iframe>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="contact-right">

                        <h2>

                            Send Us A Message

                        </h2>

                        <p className="contact-intro">

                            Complete the form below and we'll
                            get back to you shortly.

                        </p>

                        <div className="contact-line"></div>

                        <form className="contact-form">

                            <input
                                type="text"
                                placeholder="Your Name"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                            />

                            <textarea
                                rows="7"
                                placeholder="Write your message..."
                            ></textarea>

                            <button
                                type="submit"
                                className="popup-button popup-primary"
                            >

                                Send Message

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </Modal>

    );

}

export default ContactModal;