import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutServicesSection from "./components/AboutServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";

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

    const [selectedService, setSelectedService] = useState(null);

    /* ===========================================
                OPEN FUNCTIONS
    =========================================== */

    function openAbout() {

        setShowAbout(true);

    }

    function openServices(service = null){

    setSelectedService(service);

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

            <AboutServicesSection

    openAbout={openAbout}

    openServices={openServices}

/>

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

    close={() => {

        setShowServices(false);

        setSelectedService(null);

    }}

    openContact={openContact}

    selectedService={selectedService}

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

            <a
    href="https://wa.me/250783159615"
    className="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact RECOGE on WhatsApp"
    title="Chat with us"
>
    <FaWhatsapp />
</a>

        </>

    );

}

export default App;