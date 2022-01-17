import { createStore } from "redux";
import { reducer } from "./AddJob/reducer";

export const store = createStore(reducer);