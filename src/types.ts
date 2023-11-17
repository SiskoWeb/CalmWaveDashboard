import { ChangeEvent } from "react";

export type AUdioHookType = {
  playing: boolean;
  toggle: () => void;
  handleVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  volume: number;
};

export type TaskType = {
  id: number;
  title: string;
  isComplte: boolean;
};
