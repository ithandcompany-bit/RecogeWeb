import { useState } from "react";

import AboutModal from "../modals/AboutModal";

import "../styles/AboutServices.css";




function AboutSection() {

    const [showAbout, setShowAbout] = useState(false);

    return (
        <>
            <section className="about-card">

               <h2>About Us</h2>

<div className="section-line"></div>

<p>
    Recoge Ltd is a multidisciplinary engineering consultancy
    delivering innovative engineering, architectural and construction
    solutions across Rwanda. We combine technical expertise,
    quality workmanship and client-focused service to turn ideas
    into successful projects.
</p>

               <button onClick={() => setShowAbout(true)}>

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