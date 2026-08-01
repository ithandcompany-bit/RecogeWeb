import { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import "../styles/modal.css";

function Modal({ title, children, close }) {

    useEffect(() => {

        function handleEscape(event) {

            if (event.key === "Escape") {

                close();

            }

        }

        document.addEventListener("keydown", handleEscape);

        document.body.style.overflow = "hidden";

        return () => {

            document.removeEventListener(
                "keydown",
                handleEscape
            );

            document.body.style.overflow = "auto";

        };

    }, [close]);

    return (

        <div
            className="backdrop"
            onClick={close}
        >

            <div
                className="modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >

                <header className="modal-header">

                    <div className="modal-header-spacer"></div>

                    <h2 className="modal-title">

                        {title}

                    </h2>

                    <button

                        className="close-button"

                        onClick={close}

                        aria-label="Close Modal"

                    >

                        <FaXmark />

                    </button>

                </header>

                <div className="modal-content">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default Modal;