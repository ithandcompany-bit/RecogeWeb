import "../styles/hero.css";

import {
    FaArrowRight,
    FaPhone,
    FaBuilding,
    FaDraftingCompass,
    FaShieldHalved,
    FaLocationDot
} from "react-icons/fa6";

function Hero({ openServices, openContact }) {

    return (

        <section className="hero" id="hero">

            <img
                src="/src/assets/images/hero-site.jpg"
                alt="Recoge Ltd Project"
                className="hero-bg"
            />

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <span className="hero-top">

                    ENGINEERING • ARCHITECTURE • CONSULTANCY

                </span>

                <h1>

                    Engineering

                    <span>Tomorrow's</span>

                    Infrastructure

                </h1>

                <p>

                    Engineering, Architectural and Construction Consultancy
                    delivering innovative, sustainable and reliable
                    solutions across Rwanda.

                    <br /><br />

                    Wherever your project is,
                    our team is ready to reach you.

                </p>

                <div className="hero-buttons">

                    <a
                        href="#projects"
                        className="hero-btn-primary"
                    >

                        Explore Our Work

                        <FaArrowRight/>

                    </a>

                    <button
                        className="hero-btn-secondary"
                        onClick={openContact}
                    >

                        <FaPhone/>

                        Contact Us

                    </button>

                </div>

            </div>

            <div className="hero-stats">

                <div
                    className="hero-stat"
                    onClick={openServices}
                >

                    <FaBuilding/>

                    <div>

                        <h3>Engineering</h3>

                        <p>Civil & Structural</p>

                    </div>

                </div>

                <div
                    className="hero-stat"
                    onClick={openServices}
                >

                    <FaDraftingCompass/>

                    <div>

                        <h3>Architecture</h3>

                        <p>Planning & Design</p>

                    </div>

                </div>

                <div
                    className="hero-stat"
                    onClick={openServices}
                >

                    <FaShieldHalved/>

                    <div>

                        <h3>Quality</h3>

                        <p>Safety First</p>

                    </div>

                </div>

                <div className="hero-stat">

                    <FaLocationDot/>

                    <div>

                        <h3>Nationwide</h3>

                        <p>Serving all Rwanda</p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;