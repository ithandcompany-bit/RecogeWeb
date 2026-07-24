import Modal from "../components/Modal";

function ResearchModal({ research, close }) {

    return (

        <Modal close={close}>

            <div className="research-modal">

                <img
                    src={research.image}
                    alt={research.title}
                />

                <h2>{research.title}</h2>

                <section>

                    <h3>Summary</h3>

                    <p>{research.summary}</p>

                </section>

                <section>

                    <h3>Objective</h3>

                    <p>{research.objective}</p>

                </section>

                <section>

                    <h3>Methodology</h3>

                    <p>{research.methodology}</p>

                </section>

                <section>

                    <h3>Findings</h3>

                    <p>{research.findings}</p>

                </section>

                <section>

                    <h3>Future Work</h3>

                    <p>{research.futureWork}</p>

                </section>

            </div>

        </Modal>

    );

}

export default ResearchModal;