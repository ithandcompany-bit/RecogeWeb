import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";

import "../styles/aboutServices.css";

function AboutServicesSection({

    openAbout,

    openServices

}){

    return(

        <section className="about-services-section">

            {/* ===========================================
                        SECTION HEADING
            =========================================== */}

            <div className="section-heading">

                <span>

                    ABOUT RECOGE LTD

                </span>

                <h2>

                    Engineering Excellence Across Rwanda

                </h2>

                <p>

                    RECOGE Ltd is a trusted construction and geotechnical company committed to delivering 
                    safe, reliable, and high quality engineering solutions.

                </p>

            </div>

            {/* ===========================================
                        CONTENT
            =========================================== */}

            <div className="main-content">

                <AboutSection

                    openAbout={openAbout}

                />

                <ServicesSection

                    openServices={openServices}

                />

            </div>

        </section>

    );

}

export default AboutServicesSection;