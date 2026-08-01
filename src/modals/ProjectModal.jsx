import Modal from "../components/Modal";
import "../styles/projectModal.css";

function ProjectModal({

    project,
    close,
    openContact,
    openServices

}) {

    return (

        <Modal
            close={close}
            title={project.title}
        >

            <div className="project-popup">

                <img

                    src={project.image}

                    alt={project.title}

                    className="project-popup-image"

                />

                <div className="project-popup-content">

                    <span className="project-category">

                        {project.category}

                    </span>

                    <h2>

                        {project.title}

                    </h2>

                    <div className="project-divider"></div>

                    <p className="project-popup-description">

                        {project.details}

                    </p>

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

    </button>

</div>

                </div>

            </div>

        </Modal>

    );

}

export default ProjectModal;