import Modal from "../components/Modal";

function ServicesModal({ close }) {
    return (
        <Modal close={close}>

            <div className="services-modal">

                <img
                    src="/images/services-cover.jpg"
                    alt="Services"
                    className="services-cover"
                />

                <section className="service-block">

                    <h1>OUR SERVICES</h1>

                    <p>
                        We provide innovative construction
                        solutions tailored to our clients'
                        needs, from design to completion.
                    </p>

                </section>

                <section className="service-grid">

                    <div className="service-card">

                        <h2>Architectural Design</h2>

                        <p>
                            Modern and functional designs
                            adapted to your vision.
                        </p>

                    </div>

                    <div className="service-card">

                        <h2>Construction</h2>

                        <p>
                            Residential and commercial
                            construction projects built
                            with quality materials.
                        </p>

                    </div>

                    <div className="service-card">

                        <h2>Interior Design</h2>

                        <p>
                            Beautiful interior spaces
                            combining comfort and style.
                        </p>

                    </div>

                    <div className="service-card">

                        <h2>Project Management</h2>

                        <p>
                            Careful planning and supervision
                            from start to finish.
                        </p>

                    </div>

                </section>

            </div>

        </Modal>
    );
}

export default ServicesModal;