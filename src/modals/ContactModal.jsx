import Modal from "../components/Modal";

import "../styles/contactModal.css";

import contactHero from "/images/heroAbout.png";

import {

    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaPaperPlane

} from "react-icons/fa";

function ContactModal({

    close

}){

    return(

<Modal

    close={close}

    title="Contact RECOGE LTD"

>

<div className="contact-popup">

{/*=========================================
                HERO
=========================================*/}

<section className="contact-hero">

    <img

        src={contactHero}

        alt="Contact RECOGE"

        className="contact-hero-image"

    />

    <div className="contact-hero-overlay">

        <h2>

            Let's Build Together

        </h2>

        <p>

            Whether you need engineering consultancy,
            geotechnical investigations, laboratory
            testing or construction support,
            our experienced professionals are ready
            to help turn your vision into reality.

        </p>

    </div>

</section>

{/*=========================================
            INTRODUCTION
=========================================*/}

<section className="contact-introduction">

    <h2>

        Contact Us

    </h2>

    <h3>

        We'd Love to Hear About
        Your Next Project

    </h3>

</section>

<div className="contact-popup-content">

    {/*=========================================
            CONTACT INFORMATION
=========================================*/}

<div className="contact-left">

    <div className="contact-card">

        <div className="contact-icon">

            <FaPhoneAlt/>

        </div>

        <div className="contact-info">

            <h4>

                Phone Numbers

            </h4>

            <p>(+250) 790 288 833</p>

            <p>(+250) 785 445 075</p>

            <p>(+250) 788 263 543</p>

        </div>

    </div>

    <div className="contact-card">

        <div className="contact-icon">

            <FaEnvelope/>

        </div>

        <div className="contact-info">

            <h4>

                Email Address

            </h4>

            <p>

                recogeltd@gmail.com

            </p>

        </div>

    </div>

    <div className="contact-card">

        <div className="contact-icon">

            <FaMapMarkerAlt/>

        </div>

        <div className="contact-info">

            <h4>

                Office Location

            </h4>

            <p>

                KN 5 Road

                <br/>

                Kicukiro Centre

                <br/>

                Kigali, Rwanda

            </p>

        </div>

    </div>

    <div className="contact-card">

        <div className="contact-icon">

            <FaClock/>

        </div>

        <div className="contact-info">

            <h4>

                Working Hours

            </h4>

            <p>

                Monday – Friday

                <br/>

                8:00 AM – 5:00 PM

            </p>

        </div>

    </div>

    {/*==========================
            MAP
    ==========================*/}

    <div className="contact-map-card">

        <h4>

            Our Location

        </h4>

        <iframe

            className="contact-map"

            title="RECOGE Location"

            loading="lazy"

            allowFullScreen

            src="https://www.google.com/maps?q=KN+5+Rd,+Kicukiro+Center,+Kigali,+Rwanda&output=embed"

        />

    </div>

</div>

{/*=========================================
                CONTACT FORM
=========================================*/}

<div className="contact-right">

    <div className="contact-form-header">

        <h3>

            Send Us a Message

        </h3>

        <p>

            Complete the form below and one of
            our engineering professionals will
            get back to you as soon as possible.

        </p>

    </div>

    <form className="contact-form">

        <div className="form-grid">

            <input

                type="text"

                placeholder="Full Name"

                required

            />

            <input

                type="email"

                placeholder="Email Address"

                required

            />

        </div>

        <div className="form-grid">

            <input

                type="tel"

                placeholder="Phone Number"

            />

            <input

                type="text"

                placeholder="Subject"

                required

            />

        </div>

        <textarea

            placeholder="Tell us about your project..."

            rows="8"

            required

        ></textarea>

        <button

            type="submit"

            className="contact-submit"

        >

            <FaPaperPlane />

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