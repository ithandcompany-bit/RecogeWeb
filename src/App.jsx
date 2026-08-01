import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

import AboutModal from "./modals/AboutModal";
import ServicesModal from "./modals/ServicesModal";
import ContactModal from "./modals/ContactModal";

function App() {

    /* ===========================================
                    STATE
    =========================================== */

    const [showAbout, setShowAbout] = useState(false);

    const [showServices, setShowServices] = useState(false);

    const [showContact, setShowContact] = useState(false);

    /* ===========================================
                OPEN FUNCTIONS
    =========================================== */

    function openAbout() {

        setShowAbout(true);

    }

    function openServices() {

        setShowServices(true);

    }

    function openContact() {

        setShowContact(true);

    }

    /* ===========================================
                CLOSE FUNCTIONS
    =========================================== */

    function closeAbout() {

        setShowAbout(false);

    }

    function closeServices() {

        setShowServices(false);

    }

    function closeContact() {

        setShowContact(false);

    }

    /* ===========================================
                SCROLL TO PROJECTS
    =========================================== */

    function scrollToProjects() {

        closeAbout();

        closeServices();

        closeContact();

        document
            .getElementById("projects")
            ?.scrollIntoView({

                behavior: "smooth"

            });

    }

    return (

        <>

            <Navbar

                openAbout={openAbout}

                openServices={openServices}

                openContact={openContact}

            />

            <Hero

                openServices={openServices}

                openContact={openContact}

            />

            {/* ===========================================
                        ABOUT + SERVICES
            =========================================== */}

            <section className="about-services-section">

                <div className="section-heading">

                    <span>

                        ABOUT RECOGE LTD

                    </span>

                    <h2>

                        Engineering Excellence Across Rwanda

                    </h2>

                    <p>

                        We provide multidisciplinary engineering,
                        architecture and construction consultancy
                        with quality, innovation and professionalism
                        at the heart of every project.

                    </p>

                </div>

                <div className="main-content">

                    <AboutSection

                        openAbout={openAbout}

                    />

                    <ServicesSection

                        openServices={openServices}

                    />

                </div>

            </section>

            {/* ===========================================
                        PROJECTS
            =========================================== */}

            <ProjectsSection

                openContact={openContact}

                openServices={openServices}

            />

            {/* ===========================================
                        TESTIMONIALS
            =========================================== */}

            <Testimonials />

            {/* ===========================================
                            CTA
            =========================================== */}

            <CtaSection

                openContact={openContact}

                openServices={openServices}

            />

            {/* ===========================================
                        MODALS
            =========================================== */}

            {

                showAbout && (

                    <AboutModal

                        close={closeAbout}

                        openContact={openContact}

                        scrollToProjects={scrollToProjects}

                    />

                )

            }

            {

                showServices && (

                    <ServicesModal

                        close={closeServices}

                        openContact={openContact}

                    />

                )

            }

            {

                showContact && (

                    <ContactModal

                        close={closeContact}

                    />

                )

            }

            {/* ===========================================
                            FOOTER
            =========================================== */}

            <Footer

                openAbout={openAbout}

                openServices={openServices}

                openContact={openContact}

                scrollToProjects={scrollToProjects}

            />

        </>

    );

}

export default App;