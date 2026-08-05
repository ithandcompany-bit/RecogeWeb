import { useEffect, useState } from "react";

import "../styles/hero.css";

import {

    FaCircleCheck,
    FaFileLines,
    FaArrowRight,
    FaHelmetSafety,
    FaFlask,
    FaMapLocationDot,
    FaCompassDrafting

} from "react-icons/fa6";

/* ===========================
        HERO IMAGES
=========================== */

import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";

/* ===========================
        SLIDES
=========================== */

const slides = [

    {

        image: hero1,

        title: "Site & Geotechnical Investigations",

        subtitle: "Reliable ground assessment",

        icon: FaMapLocationDot

    },

    {

        image: hero2,

        title: "Architecctural & Structural Design ",

        subtitle: "Innovative technical solutions",

        icon: FaCompassDrafting

    },

    {

        image: hero3,

        title: "Construction Services",

        subtitle: "Quality from start to finish",

        icon: FaHelmetSafety

    },

    {

        image: hero4,

        title: "Materials Testing & Quality Control",

        subtitle: "Accurate testing you can trust",

        icon: FaFlask

    }

];

function Hero({

    openServices,

    openContact

}){

    /* ===========================
            STATE
    =========================== */

    const [currentSlide,setCurrentSlide]=useState(0);

    /* ===========================
            AUTO SLIDER
    =========================== */

    useEffect(()=>{

        const interval=setInterval(()=>{

            setCurrentSlide(

                prev=>

                    prev===slides.length-1

                        ?0

                        :prev+1

            );

        },7000);

        return()=>clearInterval(interval);

    },[]);

    /* ===========================
            CURRENT
    =========================== */

    const current=slides[currentSlide];

        return (

        <section className="hero" id="hero">

            {/* ======================================
                    BACKGROUND SLIDES
            ======================================= */}

            <div className="hero-slides">

                {

                    slides.map((slide,index)=>(

                        <div

                            key={index}

                            className={

                                index===currentSlide

                                ?

                                "hero-slide active-slide"

                                :

                                "hero-slide"

                            }

                            style={{

                                backgroundImage:`url(${slide.image})`

                            }}

                        />

                    ))

                }

            </div>

            {/* Dark Overlay */}

            <div className="hero-overlay"></div>

            {/* ======================================
                    CONTENT
            ======================================= */}

            <div className="hero-content">

                <div className="hero-diamond"></div>

                <span className="hero-top">

                    ENGINEERING • CONSULTANCY • CONSTRUCTION

                </span>

                <h1>

                    Engineering

                    <span>

                        Tomorrow's Infrastructure

                    </span>

                    for Rwanda

                </h1>

                {/* <p>

                    Delivering multidisciplinary engineering consultancy,
                    geotechnical investigations, construction supervision
                    and laboratory testing that build safe,
                    sustainable infrastructure across Rwanda.

                </p> */}

                <div className="hero-line"></div>

                {/* =============================
                        SERVICES
                ============================== */}

                <div className="hero-services">

    <div className={currentSlide === 0 ? "hero-service active-service" : "hero-service"}>

        <FaCircleCheck className="service-check"/>

        <span>

            {slides[0].title}

        </span>

    </div>

    <div className={currentSlide === 2 ? "hero-service active-service" : "hero-service"}>

        <FaCircleCheck className="service-check"/>

        <span>

           {slides[1].title}

        </span>

    </div>

    <div className={currentSlide === 1 ? "hero-service active-service" : "hero-service"}>

        <FaCircleCheck className="service-check"/>

        <span>

            {slides[2].title}

        </span>

    </div>

    <div className={currentSlide === 3 ? "hero-service active-service" : "hero-service"}>

        <FaCircleCheck className="service-check"/>

        <span>

            {slides[3].title}

        </span>

    </div>

</div>

                {/* =============================
                        BUTTONS
                ============================== */}

                <div className="hero-buttons">

                    <button

                        className="hero-btn-primary"

                        onClick={openContact}

                    >

                        <FaFileLines/>

                        Request Proposal

                    </button>

                    <button

                        className="hero-btn-secondary"

                        onClick={openServices}

                    >

                        <FaArrowRight/>

                        Explore Services

                    </button>

                </div>

            </div>

        </section>

    );

}

export default Hero;