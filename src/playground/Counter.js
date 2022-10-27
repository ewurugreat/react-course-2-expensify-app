import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import IndecisionApp from './counterMerge';
import { store } from './counterMerge';
import { demo1 } from './counterMerge';

const jsx = (

        <Provider store={store}>
            <IndecisionApp />
        </Provider>

)


ReactDOM.render(jsx, demo1)