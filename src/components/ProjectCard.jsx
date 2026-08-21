import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ProjectCard({

    project,

    openProject

}) {

    return (

        <article
            className="project-card"
            onClick={() => openProject(project)}
        >

            {/* ================= IMAGE ================= */}

            <div className="project-image">

                <img
                    src={project.image}
                    alt={project.title}
                />

            </div>

            {/* ================= CONTENT ================= */}

            <div className="project-content">

                <div className="project-top">

                    {/* <span className="project-service">

                        {project.service}

                    </span> */}

                    {/* <div className="project-location">

                        <FaLocationDot />

                        <span>

                            {

                                project.location ||

                                "Rwanda"

                            }

                        </span>

                    </div> */}

                </div>

                <h3>

                    {project.title}

                </h3>

                <button className="project-link">

                    View Project

                    <FaArrowRight />

                </button>

            </div>

        </article>

    );

}

export default ProjectCard;