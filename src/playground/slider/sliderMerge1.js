import React from "react";
import { connect } from "react-redux";
import { combineReducers, createStore } from "redux";
import SliderApp from "./SliderApp";
import counterState, { increaseCounter } from "./counterState";

export const counter = { count: 0 }

export const store = (createStore(combineReducers({
    count: counterState
})));

const mapStateToProps = (state) => {
    return {
        count: state.count
    }

}
// store.subscribe(() =>{
//     console.log(store.getState())
// })


export const demo = document.getElementById('demo1')
export default connect(mapStateToProps)(SliderApp)