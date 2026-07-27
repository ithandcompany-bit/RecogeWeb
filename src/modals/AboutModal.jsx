import Modal from "../components/Modal";
import aboutData from "../data/aboutData";
import {
    FaCheckCircle,
    FaBuilding,
    FaAward,
    FaUsers
} from "react-icons/fa";
import "../styles/AboutModal.css";

function AboutModal({  close,
    openContact,
    scrollToProjects }) {

    return (

        <Modal  title="About Recoge Construction"

    close={close}>

            <div className="about-popup">

               

                <div className="about-popup-image-wrapper">

                    <img
                        src={aboutData.heroImage}
                        alt={aboutData.title}
                        className="about-popup-image"
                    />

                </div>

                {/* ================= COMPANY OVERVIEW ================= */}

                <section className="about-popup-section">

                    <h2 className="about-popup-heading">
    <FaBuilding className="about-popup-icon" />
    Company Overview
</h2>

                    <div className="about-popup-divider"></div>

                    <p className="about-popup-text">

                        {aboutData.overview}

                    </p>

                </section>

                {/* ================= VALUES ================= */}

                <section className="about-popup-section">

                    <h2 className="about-popup-heading">
    <FaCheckCircle className="about-popup-icon" />
    Our Values
</h2>

                    <div className="about-popup-divider"></div>

                    <div className="about-popup-two-columns">

                        <ul className="about-popup-list">

                            {aboutData.values
                                .slice(0, Math.ceil(aboutData.values.length / 2))
                                .map(value => (

                                    <li key={value}>

                                        {value}

                                    </li>

                                ))}

                        </ul>

                        <ul className="about-popup-list">

                            {aboutData.values
                                .slice(Math.ceil(aboutData.values.length / 2))
                                .map(value => (

                                    <li key={value}>

                                        {value}

                                    </li>

                                ))}

                        </ul>

                    </div>

                </section>

                {/* ================= EXPERTISE ================= */}

                <section className="about-popup-section">

                   <h2 className="about-popup-heading">
    <FaBuilding className="about-popup-icon" />
    Our Expertise
</h2>

                    <div className="about-popup-divider"></div>

                    <div className="about-popup-two-columns">

                        <ul className="about-popup-list">

                            {aboutData.expertise
                                .slice(0, Math.ceil(aboutData.expertise.length / 2))
                                .map(item => (

                                    <li key={item}>

                                        {item}

                                    </li>

                                ))}

                        </ul>

                        <ul className="about-popup-list">

                            {aboutData.expertise
                                .slice(Math.ceil(aboutData.expertise.length / 2))
                                .map(item => (

                                    <li key={item}>

                                        {item}

                                    </li>

                                ))}

                        </ul>

                    </div>

                </section>

                {/* ================= ACHIEVEMENTS ================= */}

                <section className="about-popup-section">

                    <h2 className="about-popup-heading">
    <FaAward className="about-popup-icon" />
    Our Achievements
</h2>

                    <div className="about-popup-divider"></div>

                    <div className="about-popup-two-columns">

                        <ul className="about-popup-list">

                            <li>{aboutData.achievements[0]}</li>

                        </ul>

                        <ul className="about-popup-list">

                            <li>{aboutData.achievements[1]}</li>

                        </ul>

                    </div>

                </section>

                {/* ================= TEAM ================= */}

                <section className="about-popup-section">

                    <h2 className="about-popup-heading">
    <FaUsers className="about-popup-icon" />
    Our Team
</h2>

                    <div className="about-popup-divider"></div>

                    <div className="about-popup-team-grid">

                        {

                            aboutData.team.map(member => (

                                <div
                                    className="about-popup-member"
                                    key={member.id}
                                >

                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="about-popup-member-image"
                                    />

                                    <h3 className="about-popup-member-name">

                                        {member.name}

                                    </h3>

                                    <p className="about-popup-member-role">

                                        {member.role}

                                    </p>

                                    <p className="about-popup-member-degree">

                                        {member.qualification}

                                    </p>

                                </div>

                            ))

                        }

                    </div>

                </section>

                {/* ================= BUTTONS ================= */}

                <div className="about-popup-footer">

                    <button
    className="about-popup-button"
    onClick={() => {

        close();

        setTimeout(() => {

            scrollToProjects();

        }, 250);

    }}
>
    Explore Our Work
</button>

                   <button
    className="about-popup-button"
    onClick={() => {

        close();

        setTimeout(() => {

            openContact();

        }, 250);

    }}
>
    Contact Us
</button>

                </div>

            </div>

        </Modal>

    );

}

export default AboutModal;