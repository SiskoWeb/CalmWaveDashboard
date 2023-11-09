"use client";

import { useState } from "react";
import { FaClipboardList, FaXmark } from "react-icons/fa6";
import Modal from "@/app/dashboard/components/Modal";

export default function TodoList() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const toggle = (): void => {
    if (isPopupOpen === true) {
      setPopupOpen(false);
    } else {
      setPopupOpen(true);
    }
  };
  return (
    <>
      <button
        className="text-white flex items-center gap-1"
        onClick={() => toggle()}
      >
        <FaClipboardList />
        Tasks
      </button>

      <Modal isOpen={isPopupOpen}>
        <div className="min-w-[200px] h-[300px] p-4 bg-black/70 rounded-lg flex flex-col gap-2">
          <button className="flex justify-end" onClick={() => toggle()}>
            <FaXmark />
          </button>
          <div>
            <h1>Tasks</h1>
          </div>
        </div>
      </Modal>
    </>
  );
}
