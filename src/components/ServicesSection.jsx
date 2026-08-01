import {useState} from "react";
import ServicesModal from "../modals/ServicesModal";
import {

    FaBuilding,

    FaHelmetSafety,

    FaCompassDrafting,

    FaHammer,

    FaPaintRoller,

    FaClipboardList,

    FaScrewdriverWrench

} from "react-icons/fa6";

import { BsBuildingGear } from "react-icons/bs";

import {GrUserWorker, GrPlan}  from  "react-icons/gr";

import services from "../data/services";

function ServicesSection() {

    const [showServices, setShowServices] = useState(false);


    return (
        <>
        <section className="services-card">

            <h2>OUR SERVICES</h2>

            <div className="section-line"></div>

            {/* <ul>

<li><FaBuilding/> Residential Construction</li>

<li><FaHelmetSafety/> Commercial Projects</li>

<li><FaHammer/> Renovation & Remodeling</li>

<li><FaCompassDrafting/> Architectural Design</li>

<li><FaPaintRoller/> Interior Finishes</li>

<li><FaClipboardList/> Project Consultancy</li>

<li><FaScrewdriverWrench/> Structural Engineering</li>

</ul> */}

<ul>
    {services.map(service=>< li key={service.id}><service.icon/>{service.title}</li>)}
</ul>

            <button
    className="service-button"
    onClick={() => setShowServices(true)}
>

    View All Details →

</button>

            

        </section>

        {
                showServices && (

                    <ServicesModal
                        close={() =>
                            setShowServices(false)
                        }
                    />

                )
            }
        </>
    );
}

export default ServicesSection;