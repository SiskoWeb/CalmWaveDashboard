"use client";
import { decrement, increment } from "@/redux/features/music-Slice/music-Slice";
import { RootState } from "@/redux/store";
import {
  FaRegCirclePlay,
  FaCaretRight,
  FaCaretLeft,
  FaVolumeXmark,
  FaVolumeLow,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

export default function MusicPlayer() {
  const count = useSelector((state: RootState) => state.musicSlice.value);
  const dispatch = useDispatch();
  return (
    <div className="flex  justify-center items-center gap-2  ">
      {count}
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
        <button onClick={() => dispatch(increment())}>
          <FaVolumeXmark />
        </button>
        <button onClick={() => dispatch(decrement())}>
          <FaVolumeLow />
        </button>
      </div>
    </div>
  );
}
