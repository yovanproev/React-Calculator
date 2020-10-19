import React, { Component } from "react";
import "./App.css";
import Calculate from "../Calculator/Calculate/Calculate";
import SelectLoan from "../Calculator/SelectLoan/SelectLoan"
import SelectBank from "../Calculator/SelectBank/SelectBank";
import Toggle from "../ToggleButton/ToggleButton";

class Calculator extends Component {

  state = {
    selectedBankId: null,
    selectedLoanId: undefined,
    fixedInterestRate: 0,
    variableInterestRate: 0,
    amountOfLoan: 0,
    fixedYears: 0,
    fixedMonths: 0,
    variableYears: 0,
    variableMonths: 0
  }

  selectBankHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      selectedLoanId: undefined,
      selectedBankId: value
    }))
  }

  selectLoanHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      selectedLoanId: value
    }))
  }

  calculateLoanHandler = (value) => {
    this.setState(prevState => ({
      ...prevState,
      fixedInterestRate: value
    }))
  }

  render() {
    return (
      <div>
        <h1>Loan Master</h1>
        <SelectBank onChange={this.selectBankHandler} />
        {this.state.selectedBankId ? <SelectLoan loanId={this.state.selectedLoanId} bankId={this.state.selectedBankId} onChange={this.selectLoanHandler} /> : null}
        {this.state.selectedBankId && this.state.selectedLoanId ? <Calculate bankId={this.state.selectedBankId} loanType={this.state.selectedLoanId} /> : null}
        <Toggle loan={this.calculateLoanHandler}/>
      </div>
    );
  }
}

export default Calculator;
