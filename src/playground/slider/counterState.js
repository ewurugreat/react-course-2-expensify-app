import React from "react"
import { counter } from "./sliderMerge1";
export const increaseCounter = (add) => ({
    type: 'INCREASE_COUNTER',
    add
})
const counterState = (state = counter, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { count: action.add }
        default:
            return state
    }
}

export default counterState
