import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	show: false,
	iWidth: false,
};

export const menuStates = createSlice({
	name: "menuStates",
	initialState,
	reducers: {
		changeState: (state) => {
			state.show = !state.show;
		},
		changeInnerWidth: (state, action) => {
            console.log(action);
			state.iWidth = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeState, changeInnerWidth } = menuStates.actions;

export default menuStates.reducer;
