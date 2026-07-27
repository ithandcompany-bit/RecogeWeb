import Modal from "../components/Modal";
import "../styles/researchModal.css";

import {
    FaClipboardList,
    FaBullseye,
    FaFlask,
    FaSearch,
    FaArrowCircleRight,
    FaFolderOpen,
    FaCalendarAlt,
    FaCheckCircle
} from "react-icons/fa";

function ResearchModal({

    research,

    close,

    openContact

}){

    return(

        <Modal close={close}>

            <div className="research-popup">

                {/* TITLE */}

                <h1 className="research-popup-title">

                    {research.title}

                </h1>

                <div className="research-divider"></div>

                {/* INFORMATION */}

                <div className="research-meta">

                    <div className="research-meta-card">

                        <FaFolderOpen className="research-meta-icon"/>

                        <span className="research-meta-label">

                            Category

                        </span>

                        <span className="research-meta-value">

                            {research.category}

                        </span>

                    </div>

                    <div className="research-meta-card">

                        <FaCheckCircle className="research-meta-icon"/>

                        <span className="research-meta-label">

                            Status

                        </span>

                        <span className="research-meta-value">

                            {research.status}

                        </span>

                    </div>

                    <div className="research-meta-card">

                        <FaCalendarAlt className="research-meta-icon"/>

                        <span className="research-meta-label">

                            Year

                        </span>

                        <span className="research-meta-value">

                            {research.year}

                        </span>

                    </div>

                </div>

                <div className="research-divider"></div>

                {/* IMAGE */}

                <img

                    src={research.image}

                    alt={research.title}

                    className="research-image"

                />

                <div className="research-divider"></div>

                {/* SUMMARY */}

                <section className="research-section">

                    <h2>

                        <FaClipboardList />

                        Research Overview

                    </h2>

                    <p>

                        {research.summary}

                    </p>

                </section>

                <div className="research-divider"></div>

                {/* OBJECTIVE */}

                <section className="research-section">

                    <h2>

                        <FaBullseye />

                        Objective

                    </h2>

                    <p>

                        {research.objective}

                    </p>

                </section>

                <div className="research-divider"></div>

                {/* METHODOLOGY */}

                <section className="research-section">

                    <h2>

                        <FaFlask />

                        Methodology

                    </h2>

                    <p>

                        {research.methodology}

                    </p>

                </section>

                <div className="research-divider"></div>

                {/* FINDINGS */}

                <section className="research-section">

                    <h2>

                        <FaSearch />

                        Key Findings

                    </h2>

                    <p>

                        {research.findings}

                    </p>

                </section>

                <div className="research-divider"></div>

                {/* FUTURE */}

                <section className="research-section">

                    <h2>

                        <FaArrowCircleRight />

                        Future Recommendations

                    </h2>

                    <p>

                        {research.futureWork}

                    </p>

                </section>

                <div className="research-divider"></div>

                {/* BUTTONS */}

                <div className="research-buttons">

                    <button

                        className="popup-button popup-primary"

                    >

                        Request a Quote

                    </button>

                    <button

                        className="popup-button popup-secondary"

                        onClick={openContact}

                    >

                        Contact Us

                    </button>

                </div>

            </div>

        </Modal>

    );

}

export default ResearchModal;