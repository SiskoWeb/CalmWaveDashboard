"use client";
import useAudio from "@/hooks/useAudio";
import React from "react";
import { FaCloudShowersHeavy } from "react-icons/fa6";

export default function SoundEffectBtn() {
  const audioHook = useAudio(
    "https://drive.google.com/uc?export=download&id=1Nn1mdJNryPln-R71z5o9wfT6DhwITV1W"
  );
  return (
    <div className="absolute top-20 left-40 text-white shadow-md">
      <button
        onClick={audioHook.toggle}
        className="w-6 h-6 border-white hover:border-yellow-500 border-double rounded-full border-2"
      ></button>
    </div>
  );
}
