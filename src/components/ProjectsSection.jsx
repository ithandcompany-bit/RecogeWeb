import { useState } from "react";

import { projects } from "../data/projects";
import research from "../data/research";

import ProjectCard from "./ProjectCard";

import ProjectModal from "../modals/ProjectModal";
import ResearchModal from "../modals/ResearchModal";
import SectionTitle from "./SectionTitle"

import "../styles/workSection.css";

function ProjectsSection() {

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

           <SectionTitle title="OUR WORK"/>

            <p className="section-subtitle">

    Recent Projects and Case Studies

</p>

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

                        close={() =>
                            setSelectedProject(null)
                        }

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