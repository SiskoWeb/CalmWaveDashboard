"use client";

import { useState } from "react";
import { FaClipboardList, FaRegSquarePlus, FaXmark } from "react-icons/fa6";
import Modal from "@/app/dashboard/components/Modal";
import Draggable from "react-draggable";

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
    <Draggable>
      <div className="fixed top-20 left-5 ">
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
              <div className="flex flex-col gap-4 mt-4">
                <label className="flex gap-1 justify-between">
                  {" "}
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    type="text"
                    placeholder="Add Todo"
                  ></input>
                  <button className="shadow appearance-none border rounded py-2 px-3  text-grey-darker">
                    <FaRegSquarePlus />
                  </button>
                </label>
                <div className="flex flex-col gap-3">
                  {/* Task  */}
                  <div className="flex gap-2 justify-between">
                    <p>Finish Task Logic</p>
                    <button>Remove</button>
                  </div>
                  {/* Task  */}
                  <div className="flex gap-2 justify-between">
                    <p>Finish Task Logic</p>
                    <button>Remove</button>
                  </div>
                  {/* Task  */}
                  <div className="flex gap-2 justify-between">
                    <p>Finish Task Logic</p>
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Draggable>
  );
}
