import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  handleClose: () => void;
};

const Modal = ({ children, handleClose, isOpen, setOpenModal }: Props) => {
  const navRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (navRef.current && !navRef.current.contains(target)) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white px-4 rounded-lg shadow-lg h-5/6 w-full mx-5 md:mx-10 2xl:mx-80 relative">
        <div className="w-full flex items-center justify-end bg-white">
          <button
            className="mt-4 px-3 py-1 bg-orangeColor font-medium text-white rounded "
            onClick={handleClose}
          >
            Close
          </button>
        </div>
        <div
          ref={navRef}
          className="absolute h-[89%] top-16 right-0 overflow-auto pb-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
