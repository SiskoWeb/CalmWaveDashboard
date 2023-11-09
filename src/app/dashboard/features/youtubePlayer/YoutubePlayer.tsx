import React from "react";
import Button from "../../components/Button";
import { FaYoutube } from "react-icons/fa6";

export default function YoutubePlayer() {
  return (
    <Button icon={<FaYoutube />} style="bottom-[50%] h-auto w-[400px]">
      <div className="bg-black/90 rounded-md p-1">Youtube url</div>
      <div className="bg-black/60 p-2">Player</div>
    </Button>
  );
}
