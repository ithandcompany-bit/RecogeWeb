import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";

import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { useState } from "react";
import AboutModal from "./modals/AboutModal";
import ServicesModal from "./modals/ServicesModal";
import ContactModal from "./modals/ContactModal";
import CtaSection from "./components/CtaSection";

function App(){

    function scrollToProjects() {

    setShowAbout(false);

    setShowServices(false);

    setShowContact(false);

    document
        .getElementById("projects")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}

    const [showAbout, setShowAbout] = useState(false);

    const [showServices, setShowServices] = useState(false);

    const [showContact, setShowContact] = useState(false);
    return(
        <>
        <Navbar
            openAbout={() => setShowAbout(true)}
            openServices={() => setShowServices(true)}
            openContact={() => setShowContact(true)}
        />
       <Hero

    openServices={() => setShowServices(true)}

    openContact={() => setShowContact(true)}

/>
         <main className="main-content">
            <AboutSection openAbout={() => setShowAbout(true)}/>

            <ServicesSection openServices={() => setShowServices(true)}
/>
         </main>

        <ProjectsSection />

        <Testimonials />

        

           <CtaSection
        openContact={() => setShowContact(true)}
        openServices={() => setShowServices(true)}
    /> 

            {
                showAbout && (

                    <AboutModal
    close={() => setShowAbout(false)}
    openContact={() => setShowContact(true)}
    scrollToProjects={scrollToProjects}
/>

                )
            }

            {
                showServices && (

                    <ServicesModal
                        close={() => setShowServices(false)}
                    />

                )
            }

            {
                showContact && (

                    <ContactModal
                        close={() => setShowContact(false)}
                    />

                )
            }

        <Footer  
    openAbout={() => setShowAbout(true)}
    openServices={() => setShowServices(true)}
    openContact={() => setShowContact(true)}
    scrollToProjects={scrollToProjects}/>
        </>
    )

}

export default App;