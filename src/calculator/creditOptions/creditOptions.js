import React, { Component } from "react";
import "../general.css";

class CreditOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Одбери банка" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form">
        <form className="optionsFields" onSubmit={this.handleSubmit}>
          <i className="fas fa-search-dollar signs "></i>
          <select
            className="selectFields"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {" "}
            <option value="1">Одберете кредит</option>
            <option value="2">Потрошувачки кредит</option>
            <option value="3">Хипотекарен кредит</option>
            <option value="4">Станбен кредит</option>
          </select>
        </form>
      </div>
    );
  }
}

export default CreditOptions;
