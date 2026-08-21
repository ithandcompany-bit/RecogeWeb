import { useState } from "react";

import AboutModal from "../modals/AboutModal";

import "../styles/AboutServices.css";

function AboutSection() {

    const [showAbout, setShowAbout] = useState(false);

    return (
        <>

            <section className="about-card">

                <h2>
                    About Us
                </h2>

                <div className="section-line"></div>

                <p>
                    RECOGE Ltd is a multidisciplinary engineering consultancy
                    specializing in geotechnical engineering and construction
                    materials testing, with additional expertise in
                    architectural, structural and construction solutions across
                    Rwanda. We combine technical expertise, quality workmanship
                    and client-focused service to support safe, reliable and
                    successful projects.
                </p>

                <button
                    onClick={() => setShowAbout(true)}
                >
                    Learn More →
                </button>

            </section>

            {
                showAbout && (

                    <AboutModal
                        close={() =>
                            setShowAbout(false)
                        }
                    />

                )
            }

        </>
    );
}

export default AboutSection;
