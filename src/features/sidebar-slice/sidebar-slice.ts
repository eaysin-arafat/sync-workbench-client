import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  sidebarOpen: boolean;
}

const initialState: SidebarState = {
  sidebarOpen: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebar(state, action) {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
