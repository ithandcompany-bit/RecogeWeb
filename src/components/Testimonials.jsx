import { useEffect, useState } from "react";

import {

    FaChevronLeft,
    FaChevronRight,
    FaStar

} from "react-icons/fa";

import "../styles/testimonials.css";

import avatar from "../assets/images/avatar.png";

function TestimonialsSection(){

    const testimonials=[

        {

            id:1,

            image:avatar,

            name:"Arch.MUTABAZI Emmanuel",

            position:"",

            company:"",

            text:"We are very pleased with the services provided by RECOGE Ltd. Their professionalism, accuracy, and customer-focused approach make them a company we would confidently recommend to other construction and engineering clients."
        },

        {

            id:2,

            image:avatar,

            name:"Cross land Construction Group Ltd",

            position:"",

            company:"",

            text:
"The field and laboratory teams worked according to schedule and maintained excellent communication with our project team. We appreciated their commitment to meeting deadlines without compromising quality."
        },

        {

            id:3,

            image:avatar,

            name:"Eng.KWIZERA Moise",

            position:"",

            company:"",

            text:
"RECOGE Ltd provided excellent geotechnical investigation services for our project. Their team was professional, responsive, and delivered accurate results on time. We highly recommend their services."
        },

        {

            id:4,

            image:avatar,

            name:"Eng.PFUKAMUSENGE Euladie",

            position:"",

            company:"",

            text:
"RECOGE Ltd provided a well-organized geotechnical report with clear conclusions and practical recommendations. The report was extremely helpful during our project planning and design stages."        }

    ];

    const [current,setCurrent]=useState(0);

    useEffect(()=>{

        const timer=setInterval(()=>{

            setCurrent(previous=>

                (previous+1)%testimonials.length

            );

        },7000);

        return()=>clearInterval(timer);

    },[]);

        function nextSlide(){

        setCurrent(previous=>

            (previous+1)%testimonials.length

        );

    }

    function previousSlide(){

        setCurrent(previous=>

            previous===0

            ? testimonials.length-1

            : previous-1

        );

    }

    return(

<section className="testimonials-section">

    <div className="section-heading">

        <span>

            TESTIMONIALS

        </span>

        <h3>

            What Our Clients Say

        </h3>

        <p>

           Hear from organizations, institutions and private clients who trusted
    RECOGE for geotechnical engineering, construction materials testing
    and multidisciplinary engineering services.

        </p>

    </div>

    <div className="testimonial-card">

        <button

            className="testimonial-arrow testimonial-prev"

            onClick={previousSlide}

        >

            <FaChevronLeft/>

        </button>

        <button

            className="testimonial-arrow testimonial-next"

            onClick={nextSlide}

        >

            <FaChevronRight/>

        </button>

                <div className="testimonial-image">

            <img

                src={testimonials[current].image}

                alt={testimonials[current].name}

            />

        </div>

        <div className="testimonial-content">

            <div className="testimonial-stars">

                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>

            </div>

            <p className="testimonial-text">

                "{testimonials[current].text}"

            </p>

            <div className="testimonial-client">

                <h4>

                    {testimonials[current].name}

                </h4>

                <span>

                    {testimonials[current].position}

                </span>

                <small>

                    {testimonials[current].company}

                </small>

            </div>

        </div>

    </div>

</section>

    );

}

export default TestimonialsSection;