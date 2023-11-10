import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MusicState {
  musicValue: string;
}

const musices: string[] = [
  "https://cdn.pixabay.com/download/audio/2023/09/29/audio_0eaceb1002.mp3?filename=once-in-paris-168895.mp3",
  "https://cdn.pixabay.com/download/audio/2023/10/31/audio_f28b04f3c0.mp3?filename=the-flashback_60sec-1-174161.mp3",
];
const initialState: MusicState = {
  musicValue: musices[0],
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    nextMusic: (state) => {
      const currentIndex = musices.indexOf(state.musicValue);
      const nextIndex = (currentIndex + 1) % musices.length;
      state.musicValue = musices[nextIndex];
      console.log("next");
    },
    prevMusic: (state) => {
      const currentIndex = musices.indexOf(state.musicValue);
      const prevIndex = (currentIndex - 1 + musices.length) % musices.length;
      state.musicValue = musices[prevIndex];
      console.log("preven");
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextMusic, prevMusic } = musicSlice.actions;

export default musicSlice.reducer;
