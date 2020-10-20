import React, { Component } from "react";

import "./toggleButton.css";

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: props.isToggleOn
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickToggleButton(!this.state.isToggleOn);
    this.setState(() => ({
      isToggleOn: !this.state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.handleClick}>
          {!this.state.isToggleOn ? "Пресметај" : "Ресетирај форма"}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
