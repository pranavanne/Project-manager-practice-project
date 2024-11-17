import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({children}, ref) {

    const dialogReference = useRef();

    useImperativeHandle(ref, () => {
        return {
            show() {
                dialogReference.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialogReference} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form className="mt-4 text-right" action="dialog">
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
})

export default Modal;