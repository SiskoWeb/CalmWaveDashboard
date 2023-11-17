"use client";

import { TaskType } from "@/types";
import { useState } from "react";

export default function useTodoList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const onSubmit = (task: string): void => {
    if (!task) return console.log("task required");
    const newTask: TaskType = {
      id: Math.random(),
      title: task,
      isComplte: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    console.log(tasks);
  };

  const onRemoveTask = (id: number): void => {};

  return { onSubmit, tasks };
}
    