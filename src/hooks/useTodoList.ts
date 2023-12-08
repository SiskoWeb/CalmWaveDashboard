"use client";

import { TaskType } from "@/types";
import { useState } from "react";

export default function useTodoList() {
  const [tasks, setTasks] = useState<TaskType[]>(
    JSON.parse(localStorage.getItem("tasks") ?? "[]")
  );

  const onSubmit = (task: string): void => {
    if (!task) return console.log("task required");
    const newTask: TaskType = {
      id: Math.random(),
      title: task,
      isComplte: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  const onRemoveTask = (id: number): void => {
    const filtred = tasks.filter((task: TaskType) => task.id != id);
    setTasks(filtred);
    localStorage.setItem("tasks", JSON.stringify(filtred));
  };

  return { onSubmit, tasks, onRemoveTask };
}
