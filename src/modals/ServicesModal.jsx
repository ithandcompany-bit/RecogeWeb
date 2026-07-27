import Modal from "../components/Modal";
import services from "../data/services";

import "../styles/servicesModal.css";

function ServicesModal({

    close,
    openContact

}) {

    return (

        <Modal close={close} title="Recoge Construction Services">

            <div className="services-popup">

                <div className="services-popup-list">

                    {

                        services.map(service => (

                            <div
                                key={service.id}
                                className="services-popup-item"
                            >

                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="services-popup-image"
                                />

                                <div className="services-popup-content">

                                    <h2>

                                        {service.title}

                                    </h2>

                                    <p>

                                        {service.description}

                                    </p>

                                </div>

                            </div>

                        ))

                    }

                </div>

                <div className="services-popup-buttons">

                    <button
                        className="services-popup-quote"
                    >

                        Request a Quote

                    </button>

                    <button
                        className="services-popup-contact"
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