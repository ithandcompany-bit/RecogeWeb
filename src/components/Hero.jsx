import "../styles/hero.css";

import {
    FaArrowRight,
    FaPhone,
    FaBuilding,
    // FaDraftingCompass,
    FaShieldHalved,
    FaLocationDot
} from "react-icons/fa6";

function Hero({ openServices, openContact }) {

    return (

        <section className="hero" id="hero">

           
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

            <div className="hero-panel">

    <div className="hero-panel-item">

        <FaBuilding />

        <span>Engineering</span>

    </div>

    <div className="hero-divider"></div>

    <div className="hero-panel-item">

        {/* Replace with FaDraftingCompass when ready */}

        <FaBuilding />

        <span>Architecture</span>

    </div>

    <div className="hero-divider"></div>

    <div className="hero-panel-item">

        <FaShieldHalved />

        <span>Quality</span>

    </div>

    <div className="hero-divider"></div>

    <div className="hero-panel-item">

        <FaLocationDot />

        <span>Rwanda</span>

    </div>

</div>

        </section>

    );

}

export default Hero;