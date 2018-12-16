export const songs = {
  state: [
    { title: "No Srubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All start", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" }
  ]
};

export const selectSong = {
  state: "",

  reducers: {
    select(state) {
      return state;
    }
  },
  effects: {

  }
};
