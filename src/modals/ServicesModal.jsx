import Modal from "../components/Modal";
import services from "../data/services";

import "../styles/servicesModal.css";

function ServicesModal({

    close,
    openContact

}) {

    return (

        <Modal
            close={close}
            title="Our Professional Services"
        >

            <div className="services-popup">

                <div className="services-popup-header">

                    <h1>

                        Engineering Excellence Across Every Discipline

                    </h1>

                    <p>

                        RECOGE delivers comprehensive engineering,
                        geotechnical, construction and consultancy
                        solutions that meet international standards
                        while responding to Rwanda's infrastructure
                        development needs.

                    </p>

                </div>

                <div className="services-grid">

                    {

                        services.map(service => {

                            const Icon = service.icon;

                            return (

                                <div
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

                                                <Icon />

                                            </div>

                                            <h2>

                                                {service.title}

                                            </h2>

                                        </div>

                                        <p>

                                            {service.description}

                                        </p>

                                    </div>

                                </div>

                            );

                        })

                    }

                </div>

                <div className="services-footer">

                    <button

                        className="quote-button"

                    >

                        Request a Quote

                    </button>

                    <button

                        className="contact-button"

                        onClick={openContact}

                    >

                        Contact Us

                    </button>

                </div>

            </div>

        </Modal>

    );

}

export default ServicesModal;