import React from "react";
import { increaseCounter } from "./counterState";
import { text } from "./SliderApp";

class SliderImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log()
        console.log(this.props.store.count.count)
        return (
            <div>
                <h1> {Object.values(text)[this.props.store.count.count]}</h1>
                <p>{Object.keys(text)[this.props.store.count.count]}</p>
                <button onClick={() => {
                    this.props.store.dispatch(increaseCounter(Math.floor(Math.random() * Object.values(text).length )))
                }}>Generate Quote</button>
            </div>
        )
    }
}


export default SliderImage