import React, { Component } from "react";

import "./ToggleButton.css";
import Calculations from "../Calculator/Calculate/Calculations/Calculations"

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn: true, 
          };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
          }));
  }

    render() {
    return (
      
      <div>
      <button className="button" onClick={this.handleClick}>
        {this.state.isToggleOn ? "Пресметај": "Ресетирај форма"}
       </button>
        {(!this.state.isToggleOn) ? <Calculations /> : null}
       </div>
      
    );
  }
}

export default ToggleButton;
