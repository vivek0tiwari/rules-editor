import { createStore } from "redux";
import rules from "./reducers";
export const store = createStore(rules);
