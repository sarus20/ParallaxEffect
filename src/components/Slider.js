import React, { Component } from 'react';

export default class Slider extends Component {
    render() {
        return (
           
   <div className="slider">
    <ul className="slides">
            <li>
                <img src="https://images.pexels.com/photos/531910/pexels-photo-531910.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/> 
                <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
            </li>
            <li>
                <img src="https://images.pexels.com/photos/668465/pexels-photo-668465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Slider_1"/> 
                <div className="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
            </li>
            <li>
                <img src="https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Slider_2"/> 
                <div className="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
            </li>
            <li>
                <img src="https://images.pexels.com/photos/909/flowers-garden-colorful-colourful.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Slider_3"/>
                <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
            </li>
    </ul>
  </div>
    
        )
    }
}
