import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open,onClose}) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);
  return (
    <dialog ref={dialog} onClose={onClose} className="w-fit h-fit shadow-2xl rounded-lg bg-slate-500 p-5">
      {children}
    </dialog>
  )

}
