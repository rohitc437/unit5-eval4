import { ADD_JOB, APPLY_JOB } from "./actionTypes";

const init = {job: [], apply: []}

export const reducer = (state = init, action) => {
    switch (action.type){
        case ADD_JOB:
            return {
                ...state,
                job: [...state.job, action.payload]
            }
        case APPLY_JOB:
            return {
                ...state,
                apply: [...state.apply, action.payload]
            }
        default:
            return state;
    }
}