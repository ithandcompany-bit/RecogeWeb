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

            name:"Michael Johnson",

            position:"Project Manager",

            company:"ABC Construction Ltd",

            text:
            "RECOGE delivered outstanding engineering services. Their professionalism, technical expertise and commitment to quality exceeded our expectations."

        },

        {

            id:2,

            image:avatar,

            name:"Sarah Williams",

            position:"Business Owner",

            company:"Prime Holdings",

            text:
            "The entire project was completed on schedule with exceptional communication from the engineering team."

        },

        {

            id:3,

            image:avatar,

            name:"David Brown",

            position:"Property Developer",

            company:"Brown Developers",

            text:
            "Their geotechnical recommendations helped us make confident engineering decisions from day one."

        }

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