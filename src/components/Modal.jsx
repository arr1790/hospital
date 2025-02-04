
'use client'

import { useRef } from "react";

function Modal({ openElement, children }) {
    const refModal = useRef()

    const openModal = () => refModal.current?.showModal()
    const closeModal = () => refModal.current?.close()

    return (
        <>
            <div onClick={openModal} > {openElement} </div >

            <dialog ref={refModal} className="p-4" >

                <div onClick={closeModal} className="text-right"> ❌ </div>

                {children}
            </dialog>
        </>
    );
}

export default Modal;