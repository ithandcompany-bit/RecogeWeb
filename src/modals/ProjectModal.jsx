import Modal from "../components/Modal";
import "../styles/projectModal.css";

function ProjectModal({

    project,

    close,

    openContact

}){

    return(

        <Modal close={close} title={project.title}>

            <div className="project-popup">


                <div className="project-popup-divider"></div>

                <img
                    src={project.designImage}
                    alt="Design Concept"
                    className="project-popup-image"
                />

                <h2 className="project-popup-heading">

                    Design Concept

                </h2>

                <div className="project-popup-divider"></div>

                <img
                    src={project.plotImage}
                    alt="Plot View"
                    className="project-popup-image"
                />

                <h2 className="project-popup-heading">

                    Plot View

                </h2>

                <div className="project-popup-divider"></div>

                <img
                    src={project.progressImage}
                    alt="Current State"
                    className="project-popup-image"
                />

                <h2 className="project-popup-heading">

                    Current State

                </h2>

                <div className="project-popup-divider"></div>

                <p className="project-popup-description">

                    {project.details}

                </p>

                <div className="project-popup-divider"></div>

                <div className="project-popup-buttons">

                    <button
                        className="project-popup-quote"
                    >

                        Request a Quote

                    </button>

                    <button
                        className="project-popup-contact"
                        onClick={openContact}
                    >

                        Contact Us

                    </button>

                </div>

            </div>

        </Modal>

    )

}

export default ProjectModal;