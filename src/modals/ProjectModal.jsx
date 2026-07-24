import Modal from "../components/Modal";

function ProjectModal({ project, close }) {

    return (

        <Modal close={close}>

            <h1>{project.title}</h1>

            <p>{project.details}</p>

            <div className="project-gallery">

                <img
                    src={project.designImage}
                    alt="Design"
                />

                <img
                    src={project.plotImage}
                    alt="Plot"
                />

                <img
                    src={project.progressImage}
                    alt="Construction progress"
                />

            </div>

        </Modal>

    );

}

export default ProjectModal;