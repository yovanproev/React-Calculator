import React, { Component } from "react";
import "./App.css";
import Inputs from "../calculator/inputs/inputs";
import CreditOptions from "../calculator/creditOptions/creditOptions";
import BankOptions from "../calculator/bankOptions/bankOptions";
import Toggle from "../toggleButton/toggleButton";

class Calculator extends Component {

  state = {
    selectedBankId: null,
    selectedLoanId: null,
    fields: {},
    errors: {},
  }

  selectBankHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      selectedBankId: value
    }))
  }

  selectLoanHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      selectedLoanId: value
    }))
  }

  render() {
    return (
      <div>
        <h1>Loan Master</h1>
        <BankOptions onChange={this.selectBankHandler} />
        {this.state.selectedBankId ? <CreditOptions bankId={this.state.selectedBankId} onChange={this.selectLoanHandler} /> : null}
        {this.state.selectedBankId && this.state.selectedLoanId ? <Inputs bankId={this.state.selectedBankId} loanType={this.state.selectedLoanId} /> : null}
        <Toggle />
      </div>
    );
  }
}

export default Calculator;
