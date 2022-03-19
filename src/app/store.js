import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import menuStatesReducer from "../features/state/menuStatesSlice";
export default configureStore({
	reducer: {
		counter: counterReducer,
        menuStates: menuStatesReducer,
	},
});
