import { useState } from "react";

import AboutModal from "../modals/AboutModal";

import "../styles/AboutServices.css";


function AboutSection() {

    const [showAbout, setShowAbout] = useState(false);

    return (
        <>
            <section className="about-card">

                <h2>ABOUT US</h2>

                <hr />

                <p>
            Recoge Construction is a trusted company with years
            of experience in delivering exceptional residential
            and commercial projects.
                </p>

                <button
                    onClick={() => setShowAbout(true)}
                >
                    Read More
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