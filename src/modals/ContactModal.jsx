import Modal from "../components/Modal";

function ContactModal({ close }) {
    return (
        <Modal close={close}>

            <div className="contact-modal">

                <h1>CONTACT US</h1>

                <p>
                    Have a project in mind? Reach out to us
                    and let's build something exceptional together.
                </p>

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Your name"
                    />

                    <input
                        type="email"
                        placeholder="Your email"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                    />

                    <textarea
                        placeholder="Your message"
                        rows="8"
                    />

                    <button type="submit">
                        Send Message
                    </button>

                </form>

                <div className="contact-info">

                    <div>
                        <h3>Phone</h3>
                        <p>+250 XXX XXX XXX</p>
                    </div>

                    <div>
                        <h3>Email</h3>
                        <p>contact@company.com</p>
                    </div>

                    <div>
                        <h3>Location</h3>
                        <p>Kigali, Rwanda</p>
                    </div>

                </div>

            </div>

        </Modal>
    );
}

export default ContactModal;