"use client";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Modal from "./Modal";

export default function Button({
  icon,
  style,
  children,
}: {
  icon: React.ReactElement;
  style: string;
  children: React.ReactNode;
}) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  //this function for
  const toggle = (): void => {
    if (isPopupOpen === true) {
      setPopupOpen(false);
    } else {
      setPopupOpen(true);
    }
  };

  return (
    <div className="relative flex items-center left-0 right-0">
      <Modal isOpen={isPopupOpen}>
        <div
          className={`fixed ${style}  left-0 right-0 m-auto     p-4 bg-black/70 rounded-lg flex flex-col gap-2`}
        >
          <button className="flex justify-end" onClick={() => toggle()}>
            <FaXmark />
          </button>
          {children}
        </div>
      </Modal>
      <button onClick={() => toggle()}>{icon && icon}</button>
    </div>
  );
}
