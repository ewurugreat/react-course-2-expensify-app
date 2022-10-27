import React from "react";
import ReactDOM from "react-dom";
import CounterAPP,{  storeRedux } from "./reduxCounter";
import { Provider } from "react-redux";


const store = storeRedux()
console.log(store)


const jsx = (
    <Provider store={store}>
        <CounterAPP />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('demo1'))
