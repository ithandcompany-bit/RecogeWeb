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

<div className="contact-hero">

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

</div>

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

        <a href="tel:+250790288833">

            (+250) 790 288 833

        </a>

        <a href="tel:+250785445075">

            (+250) 785 445 075

        </a>

        <a href="tel:+250788263543">

            (+250) 788 263 543

        </a>

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

        <a href="mailto:recogeltd@gmail.com">

            recogeltd@gmail.com

        </a>

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

        
                Kigali, Rwanda

                <br />

                Kicukiro Centre

                <br />

                Gatenga Sector

                <br />

                KK 649 St

                <br/>

                Gate No:24

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

        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3987.43525674517!2d30.10075599999999!3d-1.980389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNTgnNDkuNCJTIDMwwrAwNicwMi43IkU!5e0!3m2!1sen!2srw!4v1786161721861!5m2!1sen!2srw"   className="contact-map"

            title="RECOGE Location"

            loading="lazy"

            allowFullScreen/>

    

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