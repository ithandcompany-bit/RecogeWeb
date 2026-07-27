import { FaArrowRight } from "react-icons/fa";
import "../styles/workSection.css";

function ProjectCard({ project, openProject }) {

    return (

       <div className="project-card">

    <img
        src={project.image}
        alt={project.title}
        className="project-image"
    />

    <div className="project-content">

        <div className="project-meta">

            <span>{project.category}</span>

            <span>{project.year}</span>

        </div>

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