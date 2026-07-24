import {useState} from "react";
import ServicesModal from "../modals/ServicesModal";
import {
    FaBuilding,
    FaHammer,
    FaPaintBrush,
    FaRulerCombined
} from "react-icons/fa";

import { BsBuildingGear } from "react-icons/bs";

import {GrUserWorker, GrPlan}  from  "react-icons/gr"

function ServicesSection() {

    const [showServices, setShowServices] = useState(false);


    return (
        <>
        <section className="services-card">

            <h2>OUR SERVICES</h2>

            <hr />

            <ul>

            <li> <span className="icon-item"><FaBuilding/></span>  Residential Construction</li>

            <li>  <span className="icon-item"><GrUserWorker/></span>  Commercial Projects</li>

            <li> <span className="icon-item"><FaHammer/></span> Renovations & Remodeling</li>

            <li> <span className="icon-item"><FaRulerCombined/></span> Custom Design Solutions</li>

            <li> <span className="icon-item"><FaPaintBrush/></span> Interior Design & Finishes</li>

            <li>  <span className="icon-item"><GrPlan/></span> Project Planning & Consultation</li>

            <li> <span className="icon-item"><BsBuildingGear /></span> Structural Engineering Support</li>

            </ul>

            <button onClick={setShowServices} className="service-button">
                View Details
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