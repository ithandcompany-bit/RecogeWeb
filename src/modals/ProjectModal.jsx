import Modal from "../components/Modal";

import {
    FaLocationDot,
    FaCalendarDays,
    FaBuilding,
    FaCircleCheck,
    FaArrowRight
} from "react-icons/fa6";

import "../styles/projectModal.css";

function ProjectModal({

    project,

    close,

    openContact,

    openServices

}){

    const status = project.status || "Ongoing";

    return(

        <Modal close={close}>

            <div className="project-popup">

                {/*=====================================
                        HERO IMAGE
                =====================================*/}

                <div className="project-hero">

                    <img

                        src={project.gallery[0]}

                        alt={project.title}

                        className="project-popup-image"

                    />

                    <span

                        className={`project-status ${status.toLowerCase().replace(" ","-")}`}

                    >

                        {status}

                    </span>

                </div>

                {/*=====================================
                        CONTENT
                =====================================*/}

                <div className="project-popup-content">

                    <span className="project-service">

                        {project.service}

                    </span>

                    <h2>

                        {project.title}

                    </h2>

                    <div className="project-meta">

                        <div>

                            <FaLocationDot/>

                            <span>

                                {

                                    project.location ||

                                    "Rwanda"

                                }

                            </span>

                        </div>

                        <div>

                            <FaBuilding/>

                            <span>

                                {

                                    project.client ||

                                    "Client Available Upon Request"

                                }

                            </span>

                        </div>

                        <div>

                            <FaCalendarDays/>

                            <span>

                                {

                                    project.year ||

                                    "Ongoing"

                                }

                            </span>

                        </div>

                    </div>

                    <div className="project-divider"></div>

                    <section className="project-overview">

                        <h3>

                            Project Overview

                        </h3>

                        <p>

                            {project.overview}

                        </p>

                    </section>

                    <div className="project-divider"></div>

                    <section className="project-scope">

                        <h3>

                            Services Provided

                        </h3>

                        <div className="scope-list">

                            {

                                project.scope.map((item,index)=>(

                                    <div

                                        key={index}

                                        className="scope-item"

                                    >

                                        <FaCircleCheck/>

                                        <span>

                                            {item}

                                        </span>

                                    </div>

                                ))

                            }

                        </div>

                    </section>

                                        <div className="project-divider"></div>

                    {/*=====================================
                            PROJECT INFORMATION
                    =====================================*/}

                    <section className="project-information">

                        <h3>

                            Project Information

                        </h3>

                        <div className="information-grid">

                            <div className="information-card">

                                <span>

                                    Service

                                </span>

                                <strong>

                                    {project.service}

                                </strong>

                            </div>

                            <div className="information-card">

                                <span>

                                    Sector

                                </span>

                                <strong>

                                    {project.sector}

                                </strong>

                            </div>

                            <div className="information-card">

                                <span>

                                    Status

                                </span>

                                <strong>

                                    {status}

                                </strong>

                            </div>

                            <div className="information-card">

                                <span>

                                    Year

                                </span>

                                <strong>

                                    {

                                        project.year ||

                                        "Ongoing"

                                    }

                                </strong>

                            </div>

                        </div>

                    </section>

                    <div className="project-divider"></div>

                    {/*=====================================
                                ACTIONS
                    =====================================*/}

                    <div className="project-popup-buttons">

                        <button

                            className="quote-button"

                            onClick={() => {

                                close();

                                setTimeout(() => {

                                    openContact();

                                },250);

                            }}

                        >

                            Request a Quote

                            <FaArrowRight/>

                        </button>

                        <button

                            className="service-button"

                            onClick={() => {

                                close();

                                setTimeout(() => {

                                    openServices();

                                },250);

                            }}

                        >

                            Our Services

                            <FaArrowRight/>

                        </button>

                    </div>

                </div>

            </div>

        </Modal>

    );

}

export default ProjectModal;