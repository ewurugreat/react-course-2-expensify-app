import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import SliderApp, { store, demo } from '../../playground/slider/sliderMerge1'

const jsx = (
    <Provider store={store}>
        <SliderApp />
    </Provider>
);

ReactDOM.render(jsx, demo)