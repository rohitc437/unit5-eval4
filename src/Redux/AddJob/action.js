import { ADD_JOB, APPLY_JOB } from "./actionTypes";

export const add_job = (value) => {
    return {
        type: ADD_JOB,
        payload: value
    }
}

export const apply_job = (id) => {
    return {
        type: APPLY_JOB,
        payload: id
    }
}