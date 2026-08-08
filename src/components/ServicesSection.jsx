import services from "../data/services";

function ServicesSection({

    openServices

}){

    return(

        <div className="services-card">

            <h2>

                Our Services

            </h2>

            <div className="section-line"></div>

            <ul className="services-list">

                {

                    services.map(service => {

                        const Icon = service.icon;

                        return(

                            <li
                            onClick={() => openServices(service)}

                                key={service.id}

                                className="service-item"

                            >

                                <div className="service-item-icon">

                                    <Icon/>

                                </div>

                                <span>

                                    {service.title}

                                </span>

                            </li>

                        );

                    })

                }

            </ul>

            <button

                onClick={openServices}

            >

                Explore Services →

            </button>

        </div>

    );

}

export default ServicesSection;