import "../styles/ctaSection.css";

import {

    FaFileSignature,
    FaTools

} from "react-icons/fa";

function CTASection({

    openContact,

    openServices

}){

    return(

        <section className="cta-section">

            <div className="cta-overlay">

                <span className="cta-top">

                    GET IN TOUCH

                </span>

                <h2>

                    Ready to Start Your Next Project?

                </h2>

                <p>

                    Whether you require geotechnical investigations,
                    engineering consultancy, construction supervision
                    or laboratory testing, RECOGE is ready to deliver
                    reliable solutions tailored to your project.

                </p>

                <div className="cta-buttons">

                    <button

                        className="cta-primary"

                        onClick={openContact}

                    >

                        <FaFileSignature/>

                        Get a Quote

                    </button>

                    <button

                        className="cta-secondary"

                        onClick={openServices}

                    >

                        <FaTools/>

                        Our Services

                    </button>

                </div>

            </div>

        </section>

    );

}

export default CTASection;