
import "../styles/modal.css";

function Modal({ title, children, close }) {

    return (

        <div className="backdrop">

            <div className="modal">

               <div className="modal-header">

    <div className="modal-header-spacer"></div>

    <h2 className="modal-title">

        {title}

    </h2>

    <button
        className="close-button"
        onClick={close}
    >
        ✕
    </button>

</div>

                <div className="modal-content">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default Modal;