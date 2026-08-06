import Modal from "../components/Modal";
import aboutData from "../data/aboutData";

import {
    FaBuilding,
    FaCheckCircle,
    FaAward,
    FaUsers,
    FaArrowRight,
    
    FaBullseye,
    FaEye
} from "react-icons/fa";

import "../styles/AboutModal.css";



function AboutModal({

    close,
    openContact,
    scrollToProjects

}){

    return(

<Modal

    title="About RECOGE LTD"

    close={close}

>

<div className="about-popup">

{/* ===========================================
                HERO
=========================================== */}

<section className="about-hero">

    <img

        src={aboutData.heroImage}

        alt={aboutData.title}

        className="about-hero-image"

    />

    <div className="about-hero-overlay">

        <h1>

            {aboutData.title}

        </h1>

        <p>

            Building Rwanda's Future Through
            Engineering Excellence,
            Innovation and Quality Construction.

        </p>

    </div>

</section>

{/* ===========================================
            COMPANY OVERVIEW
=========================================== */}

<section className="about-card">

    <div className="section-title">

        <FaBuilding/>

        <h3>

            Company Overview

        </h3>

    </div>

    <div className="section-divider"></div>

    <p>

        {aboutData.overview}

    </p>

</section>

{/* ===========================================
            MISSION & VISION
=========================================== */}

<section className="mission-vision-grid">

    <div className="about-card">

        <div className="section-title">

            <FaBullseye />

            <h3>

                Our Mission

            </h3>

        </div>

        <div className="section-divider"></div>

        <p>
{aboutData.mission}

        </p>

    </div>

    <div className="about-card">

        <div className="section-title">

            <FaEye />

            <h3>

                Our Vision

            </h3>

        </div>

        <div className="section-divider"></div>

        <p>

           {aboutData.vision}

        </p>

    </div>

</section>

{/* ===========================================
                CORE VALUES
=========================================== */}

<section className="about-card">

    <div className="section-title">

        <FaCheckCircle/>

        <h3>

            Core Values

        </h3>

    </div>

    <div className="section-divider"></div>

    <div className="two-column-grid">

        {
    aboutData.values.map(value => (

        <div
            className="list-card"
            key={value}
        >

            <FaCheckCircle
                className="list-icon"
            />

            <span>

                {value}

            </span>

        </div>

    ))
}

    </div>

</section>

{/* ===========================================
            AREAS OF EXPERTISE
=========================================== */}

<section className="about-card">

    <div className="section-title">

        <FaBuilding />

        <h3>

            Areas of Expertise

        </h3>

    </div>

    <div className="section-divider"></div>

    <div className="two-column-grid">

        {

            aboutData.expertise.map(item => (

                <div
                    className="list-card"
                    key={item}
                >

                    <FaArrowRight
                        className="list-icon"
                    />

                    <span>

                        {item}

                    </span>

                </div>

            ))

        }

    </div>

</section>

{/* ===========================================
                ACHIEVEMENTS
=========================================== */}

<section className="about-card">

    <div className="section-title">

        <FaAward />

        <h3>

            Achievements

        </h3>

    </div>

    <div className="section-divider"></div>

    <div className="achievement-grid">

        {

            aboutData.achievements.map(

                (item, index) => (

                    <div
                        className="achievement-card"
                        key={index}
                    >

                        <FaAward
                            className="achievement-icon"
                        />

                        <p>

                            {item}

                        </p>

                    </div>

                )

            )

        }

    </div>

</section>

{/* ===========================================
                TEAM
=========================================== */}

<section className="about-card">

    <div className="section-title">

        <FaUsers />

        <h3>

            Meet Our Team

        </h3>

    </div>

    <div className="section-divider"></div>

    <div className="team-grid">

        {

            aboutData.team.map(member => (

                <div
                    className="team-card"
                    key={member.id}
                >

                    <div className="team-image-wrapper">

                        <img

                            src={member.image}

                            alt={member.name}

                            className="team-image"

                        />

                    </div>

                    <div className="team-content">

                        <h4>

                            {member.name}

                        </h4>

                        <span>

                            {member.role}

                        </span>

                        <p>

                            {member.qualification}

                        </p>

                    </div>

                </div>

            ))

        }

    </div>

</section>

{/* ===========================================
                    CTA
=========================================== */}

<section className="about-cta">

    <h3>

        Let's Build Something Exceptional Together

    </h3>

    <p>

        Whether you're planning an engineering study,
        infrastructure project, commercial building or
        residential development, our experienced team
        is ready to transform your vision into reality.

    </p>

    <div className="about-buttons">

        <button

            className="primary-button"

            onClick={() => {

                close();

                setTimeout(() => {

                    scrollToProjects();

                },250);

            }}

        >

            Explore Our Work

        </button>

        <button

            className="secondary-button"

            onClick={() => {

                close();

                setTimeout(() => {

                    openContact();

                },250);

            }}

        >

            Contact Us

        </button>

    </div>

</section>

</div>

</Modal>

    );

}

export default AboutModal;