"use client";

import {
  FaRegCirclePlay,
  FaCaretRight,
  FaCaretLeft,
  FaVolumeXmark,
  FaVolumeLow,
  FaRegCirclePause,
} from "react-icons/fa6";

import { useAppSelector, useAppDispatch } from "@/redux/reduxHooks";

import { nextMusic, prevMusic } from "@/redux/features/music-Slice/music-Slice";
import useAudio from "@/hooks/useAudio";
export default function MusicPlayer() {
  const music = useAppSelector((state) => state.musicSlice.musicValue);
  const dispatch = useAppDispatch();

  const [playing, toggle, handleVolumeChange, volume] = useAudio(music);

  return (
    <div className="flex  justify-center items-center gap-2  ">
      <div className="flex items-center ">
        <button onClick={() => dispatch(prevMusic())}>
          <FaCaretLeft />
        </button>

        <button onClick={toggle}>
          {playing ? <FaRegCirclePause /> : <FaRegCirclePlay />}
        </button>
        <button onClick={() => dispatch(nextMusic())}>
          <FaCaretRight />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button>
          <FaVolumeXmark />
        </button>
        <button>
          <FaVolumeLow />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => handleVolumeChange(e)}
          ></input>
        </button>
      </div>
    </div>
  );
}
