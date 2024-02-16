import {configureStore} from "@reduxjs/toolkit";
import plantsSlice from "./plantsSlice.js";

export default configureStore({
    reducer: {
        plants: plantsSlice
    }
})
