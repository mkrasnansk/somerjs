import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	show: false,
	iWidth: window.innerWidth < 992 ? true : false,
	anim: false,
};

export const menuStates = createSlice({
	name: "menuStates",
	initialState,
	reducers: {
		changeState: (state) => {
			state.show = !state.show;
		},
		changeInnerWidth: (state, action) => {
			state.iWidth = action.payload;
		},
		changeAnim: (state, action) => {
			state.anim = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeState, changeInnerWidth, changeAnim } = menuStates.actions;

export default menuStates.reducer;
