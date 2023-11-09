"use client";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Modal from "./Modal";

export default function Button({
  icon,
  height,
  width,
  children,
}: {
  icon: any;
  height: string;
  width: string;
  children: React.ReactNode;
}) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const toggle = (): void => {
    if (isPopupOpen === true) {
      setPopupOpen(false);
    } else {
      setPopupOpen(true);
    }
  };
  return (
    <div className="relative ">
      <Modal isOpen={isPopupOpen}>
        <div
          className={`fixed bottom-20 left-0 right-0 m-auto  ${width}  ${height} p-4 bg-black/70 rounded-lg flex flex-col gap-2`}
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
