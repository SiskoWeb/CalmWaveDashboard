"use client";
import {
  FaRegCirclePlay,
  FaCaretRight,
  FaCaretLeft,
  FaVolumeXmark,
  FaVolumeLow,
} from "react-icons/fa6";

export default function MusicPlayer() {
  return (
    <div className="flex  justify-center items-center gap-2  ">
      <div className="flex items-center ">
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
      <div className="flex items-center gap-2">
        <button>
          <FaVolumeXmark />
        </button>
        <button>
          <FaVolumeLow />
        </button>
      </div>
    </div>
  );
}
