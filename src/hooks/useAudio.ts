"use client";

import { AUdioHookType } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";


export default function useAudio(url: string): AUdioHookType {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState(0.5); // Default volume is set to 50%

  const toggle = (): void => setPlaying(!playing);

  //when u=change music
  useEffect(() => {
    audio.src = url;
    // audio.play();
  }, [audio, url]);

  // when click btn play or pause
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing, url]);

  useEffect(() => {
    // Update the volume when the volume state changes
    audio.volume = volume;
  }, [audio, volume]);

  useEffect(() => {
    // Cleanup function to pause and remove event listeners when component unmounts
    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleAudioEnded);
    };
  }, [audio]);
  //when music end  switch to next one
  const handleAudioEnded = () => {
    setPlaying(false);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const audioHook: AUdioHookType = {
    playing,
    toggle,
    handleVolumeChange,
    volume,
  };

  return audioHook;
}
