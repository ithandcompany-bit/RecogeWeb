
import { useEffect } from "react";

import Modal from "../components/Modal";

import services from "../data/services";
import aboutData from "../data/aboutData";

import "../styles/servicesModal.css";

function ServicesModal({
    close,
    openContact,
    selectedService
}) {

    useEffect(() => {

        if (!selectedService) return;

        const element = document.getElementById(
            `service-${selectedService.id}`
        );

        if (element) {

            setTimeout(() => {

                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 250);

        }

    }, [selectedService]);

    return (

        <Modal
            title="Our Professional Services"
            close={close}
        >

            <div className="services-popup">

                {/* =========================================
                        HERO
                ========================================= */}

                <div className="services-hero">

                    <img
                        src={aboutData.heroImage}
                        alt="RECOGE professional engineering services"
                        className="services-hero-image"
                    />

                    <div className="services-hero-overlay">

                        <h2>
                            Professional Engineering Services
                        </h2>

                        <p>
                            RECOGE provides trusted geotechnical engineering,
                            construction materials testing, laboratory,
                            construction and multidisciplinary engineering
                            solutions for safe and sustainable infrastructure
                            in Rwanda.
                        </p>

                    </div>

                </div>


                {/* =========================================
                        INTRODUCTION
                ========================================= */}

                <section className="services-introduction">

                    <h2>
                        Our Services
                    </h2>

                    <h3>
                        Professional Engineering Solutions
                        Tailored to Every Project
                    </h3>

                </section>


                {/* =========================================
                        ALL SERVICES
                ========================================= */}

                <section className="service-group">

                    <div className="services-grid">

                        {
                            services.map(service => {

                                const Icon = service.icon;

                                return (

                                    <article
                                        key={service.id}
                                        id={`service-${service.id}`}
                                        className={`service-card ${
                                            selectedService?.id === service.id
                                                ? "active-service"
                                                : ""
                                        }`}
                                    >

                                        <img
                                            src={service.image}
                                            alt={`${service.title} - RECOGE LTD`}
                                            className="service-image"
                                        />

                                        <div className="service-content">

                                            <div className="service-heading">

                                                <div className="service-icon">
                                                    <Icon />
                                                </div>

                                                <h3>
                                                    {service.title}
                                                </h3>

                                            </div>

                                            <p>
                                                {service.description}
                                            </p>

                                        </div>

                                    </article>

                                );

                            })
                        }

                    </div>

                </section>


                {/* =========================================
                            CTA
                ========================================= */}

                <section className="services-cta">

                    <h3>
                        Ready to Start Your Project?
                    </h3>

                    <p>
                        Let our experienced professionals provide
                        the engineering expertise your next project
                        deserves. Contact us today and let's build
                        something exceptional together.
                    </p>

                    <div className="services-footer">

                        <button
                            className="quote-button"
                            onClick={() => {

                                close();

                                setTimeout(() => {
                                    openContact();
                                }, 250);

                            }}
                        >
                            Request a Quote
                        </button>

                    </div>

                </section>

            </div>

        </Modal>

    );

}

export default ServicesModal;

