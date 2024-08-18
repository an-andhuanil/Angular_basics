import { createReducer,on } from "@ngrx/store";
import { increment } from "./counter.action";

const initailState = 0;


export const countReducer =  createReducer(
    initailState,
    on(increment, (state, action) => state + action.value)
); 


// export function countReducer(state = initailState){

//     return state;
// } 