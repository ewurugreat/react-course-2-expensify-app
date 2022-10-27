import React from "react";
import { createStore, combineReducers } from "redux";
import { connect } from 'react-redux';

const incrmentNum = ({ plusOne = 1 } = {}) => ({
    type: 'INCREMENT_NUM',
    plusOne
})

const decrementNum = ({minusOne}) => ({
    type: 'DECREMENT_NUM',
    minusOne
})

let count = { count: 0 };
export const counterActions = ((state = count, action) => {
    switch (action.type) {
        case 'INCREMENT_NUM':
            return { count: state.count + action.plusOne }
        case 'DECREMENT_NUM':
            return { count: state.count - action.minusOne }
        default:
            return state
    }
})

export const storeRedux = () => {
    const store = createStore(combineReducers({
        counting: counterActions
    }))
    return store
}



export const CounterAPP = (props, state) => {
console.log(props);

    return (
        <div>
            <button onClick={() => {
                props.dispatch(incrmentNum({ plusOne: 1 }))
            }}>+1</button>
            <span>{props.count.count}</span>
            <button onClick={() => {
                props.dispatch(decrementNum({ minusOne: 1 }))
          
            }}>-1</button>
        </div>
    );
}



const mapStateToProps = (state) => {
    return {
        count: state.counting
    }
}

export default connect(mapStateToProps)(CounterAPP)