"use client";
import { useState } from "react";
import Button from "../../components/Button";
import { FaClockRotateLeft, FaXmark } from "react-icons/fa6";

export default function Timer() {
  const [tog, setTog] = useState(0);
  const [task, setTask] = useState<string[]>(["task2"]);
  return (
    <>
      <button  onClick={() => setTog(tog + 1)}>
        {tog}
      </button>
      <button
        
        onClick={() => setTask((prev) => [...prev, "task1"])}
      >
        add
      </button>
      {task.length === 0
        ? null
        : task.map((item) => {
            <p>{item}</p>;
          })}
      <Button
        icon={<FaClockRotateLeft />}
        style="bottom-20 h-[200px] md:w-[30%] w-[55%]"
      >
        Timer
      </Button>
    </>
  );
}
