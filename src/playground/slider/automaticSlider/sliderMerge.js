import React from 'react';
import { connect } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { quotes } from './Slider';

const counter = { count: 0 };

const addCount = ({ count }) => ({
    type: 'ADD_COUNT',
    count
})

const counterState = (state = counter, action) => {
    switch (action.type) {
        case 'ADD_COUNT':
            return { count: state.count + action.count }
        default:
            return state
    }
}

export const store = createStore(combineReducers({
    counting: counterState
}));

store.subscribe(() => {
    console.log(store.getState())
});


store.dispatch(addCount({ count: 1 }))
class CounterApp extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        count: this.props.count.count
    }
  
    render() {
sliderCounter = () =>{
    cons
}
        return (
            <div >

                <h1 >{Object.values(quotes)[this.props.count.count - 1]}</h1>
                <p>{Object.keys(quotes)[this.props.count.count - 1]}</p>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    count: state.counting
})
export default connect(mapStateToProps)(CounterApp)
export const demo = document.getElementById("demo1");