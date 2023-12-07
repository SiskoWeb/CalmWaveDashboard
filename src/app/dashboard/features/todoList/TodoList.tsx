"use client";

import { useState } from "react";
import { FaClipboardList, FaRegSquarePlus, FaXmark } from "react-icons/fa6";
import Modal from "@/app/dashboard/components/Modal";
import Draggable from "react-draggable";
import useTodoList from "@/hooks/useTodoList";
import { TaskType } from "@/types";

export default function TodoList() {
  const taskLogic = useTodoList();
  const [task, setTask] = useState<string>("");
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
                    className="shadow  text-black appearance-none border rounded w-full py-2 px-3 mr-4 "
                    type="text"
                    placeholder="Add Todo"
                    onChange={(e) => setTask(e.target.value)}
                  ></input>
                  <button
                    onClick={() => taskLogic.onSubmit(task)}
                    className="shadow appearance-none border rounded py-2 px-3  text-grey-darker"
                  >
                    <FaRegSquarePlus />
                  </button>
                </label>
                <div className="flex flex-col gap-3">
                  {/* Task  */}
                  {taskLogic.tasks.map((item: TaskType): any => (
                    <div key={item.id} className="flex gap-2 justify-between">
                      <p>{item.title}</p>
                      <button onClick={() => taskLogic.onRemoveTask(item.id)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Draggable>
  );
}
