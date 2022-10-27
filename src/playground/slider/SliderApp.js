import React from "react"
import SliderImage from "./SliderImage";
import { increaseCounter } from "./counterState";
// import text  from './Slider'

export  const text = {
    "-Great Ewuru": '"Who go better go better na time ee dey take"',
    "-Bright Ewuru": '"A great foul is always ungrateful even ur\
   girl fate is so unfaithful"',
    "-Samson Ewuru": '"Na one life i get i no get another one if u\
   think say you hurt plese i no get another one"',
    "-Princess Ewuru": '"Just follow all your dreams and when you\
   and when you reach their celebrate "',
    "-Destiny Ewuru": '"No body really know \'s tomorrow"',
    "-Prosper Ewuru": '"To all this bitches fuck about your feelings" '


}
class SliderApp extends React.Component {
    constructor(props) {
        super(props);
    
    }

    render() {
     
        return (
            <SliderImage store={this.props} />
        )
    }
}


export default SliderApp