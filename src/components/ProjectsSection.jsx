import { useState } from "react";

import { projects } from "../data/projects";
import research from "../data/research";

import ProjectCard from "./ProjectCard";

import ProjectModal from "../modals/ProjectModal";
import ResearchModal from "../modals/ResearchModal";
import SectionTitle from "./SectionTitle"

import "../styles/workSection.css";

function ProjectsSection( {
    openContact,
    openServices
}) {

    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedResearch, setSelectedResearch] = useState(null);

    const [visibleProjects, setVisibleProjects] = useState(3);

    const [activeTab, setActiveTab] = useState("projects");

    const displayedItems =
        activeTab === "projects"
            ? projects
            : research;

    function handleViewMore() {
        setVisibleProjects(previous => previous + 3);
    }

    return (

        <section
            className="projects-section"
            id="projects"
        >

           <div className="section-heading">

    <span>

        FEATURED PROJECTS

    </span>

    <h2 className="work-title">

        Our Work

    </h2>

    <p>

        Explore a selection of engineering,
        geotechnical and construction projects
        demonstrating RECOGE's commitment to
        quality, innovation and technical excellence
        across Rwanda.

    </p>

</div>

           

            <div className="work-tabs">

                <button
                    className={
                        activeTab === "projects"
                            ? "active-tab"
                            : ""
                    }
                    onClick={() => {

                        setActiveTab("projects");
                        setVisibleProjects(3);

                    }}
                >
                    Projects
                </button>

                <button
                    className={
                        activeTab === "research"
                            ? "active-tab"
                            : ""
                    }
                    onClick={() => {

                        setActiveTab("research");
                        setVisibleProjects(3);

                    }}
                >
                    Case Studies
                </button>

            </div>

           <div className="projects-grid">

    {

        displayedItems.length === 0 ? (

            <div className="empty-projects">

                <h3>

                    Case Studies Coming Soon

                </h3>

                <p>

                    We are preparing detailed engineering case studies
                    showcasing our research, technical expertise and
                    innovative solutions. Please check back soon.

                </p>

            </div>

        ) : (

            displayedItems
                .slice(0, visibleProjects)
                .map(item => (

                    <ProjectCard

                        key={item.id}

                        project={item}

                        openProject={
                            activeTab === "projects"
                                ? setSelectedProject
                                : setSelectedResearch
                        }

                    />

                ))

        )

    }

</div>

            {

                visibleProjects < displayedItems.length && (

                    <button
                        className="view-more-btn"
                        onClick={handleViewMore}
                    >
                        View More
                    </button>

                )

            }

            {

                selectedProject && (

                    <ProjectModal

    project={selectedProject}

    close={() => setSelectedProject(null)}

    openContact={openContact}

    openServices={openServices}

/>

                )

            }

            {

                selectedResearch && (

                    <ResearchModal

                        research={selectedResearch}

                        close={() =>
                            setSelectedResearch(null)
                        }

                    />

                )

            }

        </section>

    );

}

export default ProjectsSection;