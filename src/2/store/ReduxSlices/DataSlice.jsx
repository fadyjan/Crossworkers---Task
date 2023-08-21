import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllMovies: [
    {
      title: "Beyond Earth",
      id: 1,
    },
    {
      title: "Bottom Gear",
      id: 2,
    },
    {
      title: "Undiscovered Cities",
      id: 3,
    },
    {
      title: "1998",
      id: 4,
    },
    {
      title: "Dark Side of the Moon",
      id: 5,
    },
    {
      title: "The Diary",
      id: 6,
    },
    {
      title: "Earth’s Untouched",
      id: 7,
    },
    {
      title: "No Land Beyond",
      id: 8,
    },
    {
      title: "During the Hunt",
      id: 9,
    },
    {
      title: "Autosport the Series",
      id: 10,
    },
    {
      title: "Same Answer II",
      id: 11,
    },
    {
      title: "Below Echo",
      id: 12,
    },
    {
      title: "The Rockies",
      id: 13,
    },
    {
      title: "Relentless",
      id: 14,
    },
    {
      title: "Community of Ours",
      id: 15,
    },
    {
      title: "Van Life",
      id: 16,
    },
    {
      title: "The Heiress",
      id: 17,
    },
    {
      title: "Off the Track",
      id: 18,
    },
    {
      title: "Whispering Hill",
      id: 19,
    },
    {
      title: "112",
      id: 20,
    },
    {
      title: "Lone Heart",
      id: 21,
    },
    {
      title: "Production Line",
      id: 22,
    },
    {
      title: "Dogs",
      id: 23,
    },
    {
      title: "Asia in 24 Days",
      id: 24,
    },
    {
      title: "The Tasty Tour",
      id: 25,
    },
    {
      title: "Darker",
      id: 26,
    },
    {
      title: "Unresolved Cases",
      id: 27,
    },
    {
      title: "Mission: Saturn",
      id: 28,
    },
  ],
  searchOutput: [],
  searchStatus: "notIntailezed",
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setSearchOutput: (state, action) => {
      state.searchOutput = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchStatus = action.payload;
    },
  },
});

export const { setSearchOutput, setSearchTerm } = moviesSlice.actions;
export default moviesSlice.reducer;
