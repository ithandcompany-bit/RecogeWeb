import Modal from "../components/Modal";
import "../styles/contactModal.css";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaPaperPlane
} from "react-icons/fa";

function ContactModal({ close }) {

    return (

        <Modal
            close={close}
            title="Start Your Project With RECOGE"
        >

            <div className="contact-popup">

                <div className="contact-hero">

                    <h2>

    Let's Build Rwanda's Future Together

</h2>

<p>

    RECOGE Engineering & Consultancy provides
    multidisciplinary engineering, geotechnical
    investigations, architectural design,
    environmental studies and construction
    consultancy across Rwanda. Our experienced
    professionals are ready to support your
    project from planning through completion.

</p>

                </div>

                <div className="contact-popup-content">

                    {/* LEFT */}

                    <div className="contact-left">

                        <div className="contact-card">

                            <div className="contact-icon">

                                <FaPhoneAlt/>

                            </div>

                            <div>

                                <h3>Phone</h3>

                                <p>(+250) 790 288 833</p>
                                <p>(+250) 785 445 075</p>
                                <p>(+250) 788 263 543</p>

                            </div>

                        </div>

                        <div className="contact-card">

                            <div className="contact-icon">

                                <FaEnvelope/>

                            </div>

                            <div>

                                <h3>Email</h3>

                                <p>

                                   recogeltd@gmail.com

                                </p>

                            </div>

                        </div>

                        <div className="contact-card">

                            <div className="contact-icon">

                                <FaMapMarkerAlt/>

                            </div>

                            <div>

                                <h3>Office</h3>

                                <p>

                                  KN 5 Rd<br/>

            Kicukiro Center<br/>

            Kigali, Rwanda
                                </p>

                            </div>

                        </div>

                        <div className="contact-card">

                            <div className="contact-icon">

                                <FaClock/>

                            </div>

                            <div>

                                <h3>Working Hours</h3>

                                <p>

                                    Monday - Friday

                                    <br/>

                                    8:00 AM – 5:00 PM

                                </p>

                            </div>

                        </div>

                        <div className="contact-map-wrapper">

                            <iframe

                                className="contact-map"

                                title="RECOGE Location"

                                loading="lazy"

                                allowFullScreen

                                src="https://www.google.com/maps?q=KN+5+Rd,+Kicukiro+Center,+Kigali,+Rwanda&output=embed"

                            />

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="contact-right">

                        <h2>

                            Send Us A Message

                        </h2>

                        <p>

                            Fill in the form below and our team
                            will contact you as soon as possible.

                        </p>

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

                                placeholder="Tell us about your project..."

                            ></textarea>

                            <button

                                type="submit"

                                className="contact-submit"

                            >

                                <FaPaperPlane/>

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