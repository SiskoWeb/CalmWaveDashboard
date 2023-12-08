"use client";
import { TaskType } from "@/types";
import { useState, useEffect } from "react";

export default function useTodoList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  // useEffect runs only on the client side
  useEffect(() => {
    // Check if localStorage is available before using it
    if (typeof window !== "undefined") {
      const storedTasks = localStorage.getItem("tasks");
      setTasks(storedTasks ? JSON.parse(storedTasks) : []);
    }
  }, []);

  const onSubmit = (task: string): void => {
    if (!task) return console.log("task required");
    const newTask: TaskType = {
      id: Math.random(),
      title: task,
      isComplte: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Check if localStorage is available before using it
    if (typeof window !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    }
  };

  const onRemoveTask = (id: number): void => {
    const filtered = tasks.filter((task: TaskType) => task.id !== id);
    setTasks(filtered);

    // Check if localStorage is available before using it
    if (typeof window !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify(filtered));
    }
  };

  return { onSubmit, tasks, onRemoveTask };
}
