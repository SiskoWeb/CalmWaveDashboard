"use client";
import { useState } from "react";
import { FaRegCirclePlay, FaCaretRight, FaCaretLeft } from "react-icons/fa6";

export default function MusicPlayer() {
  return (
    <div className="flex  justify-center items-center  ">
      <button>
        <FaCaretLeft />
      </button>
      <button>
        <FaRegCirclePlay />
      </button>
      <button>
        <FaCaretRight />
      </button>
    </div>
  );
}
