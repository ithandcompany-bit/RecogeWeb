import { useState } from "react";

import ContactModal from "../modals/ContactModal";

function ContactSection() {

    const [showContact, setShowContact] = useState(false);

    return (
        <>
            <section className="contact-section">

                <h2>CONTACT US</h2>

                <p>
                    We'd love to hear about your project.
                </p>

                <button
                    onClick={() => setShowContact(true)}
                >
                    Get in Touch
                </button>

            </section>

            {
                showContact && (

                    <ContactModal
                        close={() =>
                            setShowContact(false)
                        }
                    />

                )
            }

        </>
    );
}

export default ContactSection;