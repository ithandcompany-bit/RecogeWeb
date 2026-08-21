
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";

import "../styles/AboutServices.css";

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

                    RECOGE Ltd is a trusted engineering company in Rwanda
                    specializing in geotechnical engineering, geotechnical
                    investigations, and construction materials testing, while
                    providing multidisciplinary solutions for safe, reliable,
                    and sustainable infrastructure.

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

