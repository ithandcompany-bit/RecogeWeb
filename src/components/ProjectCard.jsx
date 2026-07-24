import { FaArrowRight } from "react-icons/fa";

function ProjectCard({ project, openProject }) {

    return (

        <div className="project-card">

            <img
                src={project.image}
                alt={project.title}
            />

            <div className="project-card-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <p

                    className="view-project"

                    onClick={() => openProject(project)}

                >

                    View Project

                    <span className="arrow">

                        <FaArrowRight />

                    </span>

                </p>

            </div>

        </div>

    );

}

export default ProjectCard;