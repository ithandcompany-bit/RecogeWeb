import { FaArrowRight } from "react-icons/fa6";

import serviceGroups from "../data/serviceGroups";

function ServicesSection({

    openServices

}){

    return(

        <div className="services-card">

            <h2>

                Our Services

            </h2>

            <div className="section-line"></div>

            <div className="service-groups">

                {

                    serviceGroups.map((group)=>{

                        const Icon = group.icon;

                        return(

                            <div

                                key={group.id}

                                className="service-group"

                            >

                                <div className="group-header">

                                    <div className="group-icon">

                                        <Icon/>

                                    </div>

                                    <h3>

                                        {group.title}

                                    </h3>

                                </div>

                                <ul>

                                    {

                                        group.services.map((service,index)=>(

                                            <li key={index}>

                                                • {service}

                                            </li>

                                        ))

                                    }

                                </ul>

                            </div>

                        );

                    })

                }

            </div>

            <button

                onClick={openServices}

            >

                Explore Services →

                

            </button>

        </div>

    );

}

export default ServicesSection;