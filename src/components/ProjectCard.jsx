// import "../styles/projectCard.css";
import { FaArrowRight } from "react-icons/fa";

function ProjectCard({ project, openProject }) {
    return (
        <div className="project-card">

            <img 
                src={project.image} 
                alt={project.title}
            />

            <div className="project-content">

                <h3>{project.title}</h3>

                <p>
                    {project.description.length > 80
                        ? project.description.substring(0, 80) + "..."
                        : project.description}
                </p>

                <span 
                    className="view-project"
                    onClick={() => openProject(project)}
                >
                    View Project <FaArrowRight />
                </span>

            </div>

        </div>
    );
}

export default ProjectCard;