import { useEffect, useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import SectionTitle from "./SectionTitle";



function TestimonialsSection() {

    const testimonials = [

       {
    id: 1,
    initials: "MJ",
    name: "Michael Johnson",
    role: "Home Owner",
    text: "The team delivered our dream house with professionalism and incredible attention to detail."
},
{
    id: 2,
    initials: "SW",
    name: "Sarah Williams",
    role: "Business Owner",
    text: "From planning to completion, the whole process was smooth and transparent."
},
{
    id: 3,
    initials: "DB",
    name: "David Brown",
    role: "Property Developer",
    text: "Outstanding quality and excellent communication throughout the project."
}

    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent(previous => {

                return (previous + 1) % testimonials.length;

            });

        }, 4000);

        return () => clearInterval(interval);

    }, []);

    function nextSlide() {

        setCurrent(previous => {

            return (previous + 1) % testimonials.length;

        });

    }

    function previousSlide() {

        setCurrent(previous => {

            return previous === 0

                ? testimonials.length - 1

                : previous - 1;

        });

    }

    return (

        <section className="testimonials-section">

            <SectionTitle title="What Our Clients Say"/>

            <div className="testimonial-slider">

                <button
                    className="slider-button"
                    onClick={previousSlide}
                >
                    <FaChevronLeft/>
                </button>

                <div className="testimonial-card">

                    <p className="quote">❝</p>

                    <p className="testimonial-text">

                        {testimonials[current].text}

                    </p>

                   <div className="client">

    <div className="client-avatar">

        {testimonials[current].initials}

    </div>

    <h3>

        {testimonials[current].name}

    </h3>

    <span>

        {testimonials[current].role}

    </span>

</div>

                </div>

                <button
                    className="slider-button"
                    onClick={nextSlide}
                >
                    <FaChevronRight/>
                </button>

            </div>

            <div className="dots">

                {
                    testimonials.map((testimonial, index) => (

                        <span
                            key={testimonial.id}
                            className={
                                index === current
                                    ? "dot active"
                                    : "dot"
                            }
                            onClick={() => setCurrent(index)}
                        />
                    ))
                }

            </div>

        </section>

    );
}

export default TestimonialsSection;