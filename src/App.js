import React, { Component } from "react";
import "./App.css";
import Inputs from "./calculator/inputs/inputs";
import CreditOptions from "./calculator/creditOptions/creditOptions";
import BankOptions from "./calculator/bankOptions/bankOptions";
import Toggle from "./toggleButton/toggleButton";
import FetchedData from "./calculator/FetchedData/fetchedData";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
  }

  render() {
    return (
      <div>
        <h1>Loan Master</h1>
        <BankOptions />
        <CreditOptions />
        <Inputs />
        <Toggle />
        <FetchedData />
      </div>
    );
  }
}

export default Calculator;
