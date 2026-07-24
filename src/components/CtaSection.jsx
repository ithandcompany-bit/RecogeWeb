function CTASection({ openContact, openServices }) {

    return (

        <section className="cta-section">

            <div className="cta-content">

                <h2>

                    Ready to Build Your Next Project?

                </h2>

                <p>

                    Whether you're planning a residential, commercial,
                    or industrial project, we're ready to turn your
                    ideas into lasting structures built with quality
                    and precision.

                </p>

                <div className="cta-buttons">

                    <button
                        className="primary-btn"
                        onClick={openContact}
                    >
                        Request a Quote
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={openServices}
                    >
                        Our Services
                    </button>

                </div>

            </div>

        </section>

    );

}

export default CTASection;