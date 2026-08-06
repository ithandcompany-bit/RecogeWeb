import Modal from "../components/Modal";
import services from "../data/services";
import aboutData from "../data/aboutData";

import serviceGroups from "../data/serviceGroups";

import "../styles/servicesModal.css";
import { FaArrowRight } from "react-icons/fa6";


function ServicesModal({

    close,
    openContact

}){

    const groupedServices = {

        "Geotechnical & Laboratory":
            services.filter(
                service =>
                    service.group === "Geotechnical & Laboratory"
            ),

        "Engineering & Design":
            services.filter(
                service =>
                    service.group === "Engineering & Design"
            ),

        "Surveying & Environment":
            services.filter(
                service =>
                    service.group === "Surveying & Environment"
            ),

        "Property & Support":
            services.filter(
                service =>
                    service.group === "Property & Support"
            )

    };

    return(

<Modal

    title="Our Services"

    close={close}

>

<div className="services-popup">

{/*=========================================
                HERO
=========================================*/}

<section className="services-hero">

    <img

       src={aboutData.heroImage}

        alt="Engineering Services"

        className="services-hero-image"

    />

    <div className="services-hero-overlay">

        <h2>

            Professional Engineering Services

        </h2>

        <p>

            Delivering innovative engineering,
            geotechnical, laboratory,
            construction and consultancy
            solutions that build stronger,
            safer and more sustainable
            infrastructure.

        </p>

    </div>

</section>

{/*=========================================
            INTRODUCTION
=========================================*/}

<section className="services-introduction">

    <h2>

        Our Services

    </h2>

    <h3>

        Professional Engineering Solutions
        Tailored to Every Project

    </h3>

</section>

{/*=========================================
            SERVICE GROUPS
=========================================*/}

{

    serviceGroups.map(group => {

        const GroupIcon = group.icon;

        const groupServices = services.filter(

            service => service.group === group.title

        );

        return(

            <section
                key={group.id}
                className="service-group"
            >

                <div className="service-group-header">

                    <div className="group-title">

                        <div className="group-icon">

                            <GroupIcon/>

                        </div>

                        <div>

                            <h3>

                                {group.title}

                            </h3>

                            <p>

                                {

                                    group.title === "Geotechnical & Laboratory"

                                    &&

                                    "Comprehensive ground investigations, laboratory testing and geotechnical engineering services for safe and sustainable construction."

                                }

                                {

                                    group.title === "Engineering & Design"

                                    &&

                                    "Professional engineering, structural design and project management services that transform ideas into successful developments."

                                }

                                {

                                    group.title === "Surveying & Environment"

                                    &&

                                    "Accurate surveying and environmental consultancy supporting planning, compliance and sustainable infrastructure."

                                }

                                {

                                    group.title === "Property & Support"

                                    &&

                                    "Property valuation, procurement support and complementary engineering services tailored to every project."

                                }

                            </p>

                        </div>

                    </div>

                </div>

                <div className="services-grid">

                    {

                        groupServices.map(service => {

                            const Icon = service.icon;

                            return(

                                <article

                                    key={service.id}

                                    className="service-card"

                                >

                                    <img

                                        src={service.image}

                                        alt={service.title}

                                        className="service-image"

                                    />

                                    <div className="service-content">

                                        <div className="service-heading">

                                            <div className="service-icon">

                                                <FaArrowRight />

                                            </div>

                                            <h4>

                                                {service.title}

                                            </h4>

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

        );

    })

}

<section className="services-cta">

    <h3>

        Ready to Start Your Project?

    </h3>

    <p>

        Let our experienced professionals
        provide the engineering solutions
        your next project deserves.

    </p>

    <div className="services-footer">

        <button

            className="quote-button"

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