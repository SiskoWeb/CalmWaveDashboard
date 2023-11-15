import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MusicState {
  musicValue: string;
}

const musices: string[] = [
  "https://drive.google.com/uc?export=download&id=1uDRj8pX7fujV9fo9adSoSQSskw9QvF5A",
  "https://drive.google.com/uc?export=download&id=1Nn1mdJNryPln-R71z5o9wfT6DhwITV1W",
  "https://drive.google.com/uc?export=download&id=1BLS-RyCUS5dsJ2mGCCZNjMZ1o7Eo4J2a",
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
