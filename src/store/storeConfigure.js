import { createStore } from "redux";
import todos from '../reducer/index.js'

const store = createStore(todos);
export default store;

const  store = createStore(reducer);
export default store;