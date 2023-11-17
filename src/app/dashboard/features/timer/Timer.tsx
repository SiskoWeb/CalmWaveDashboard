"use client";
import { useState } from "react";
import Button from "../../components/Button";
import { FaClockRotateLeft, FaXmark } from "react-icons/fa6";

export default function Timer() {
  const [tog, setTog] = useState(false);
  return (
    <>
      <button data-testid='btno'  onClick={() => setTog(true)}>{tog ? "hello" : "btn"}</button>
      <Button
        icon={<FaClockRotateLeft />}
        style="bottom-20 h-[200px] md:w-[30%] w-[55%]"
      >
        Timer
      </Button>
    </>
  );
}
