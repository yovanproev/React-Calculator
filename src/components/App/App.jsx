import React, { Component } from "react";
import "./App.css";
import Inputs from "../Calculator/Calculate/Inputs";
import SelectLoan from "../Calculator/SelectLoan/SelectLoan";
import SelectBank from "../Calculator/SelectBank/SelectBank";
import Calculations from "../Calculator/Calculate/Calculations/Calculations";
import Toggle from "../toggleButton/ToggleButton";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBankId: null,
      selectedLoanId: undefined,
      fixedInterestRate: 0,
      variableInterestRate: 0,
      amountOfLoan: 0,
      yearsFixed: 0,
      monthsFixed: 0,
      variableYears: 0,
      variableMonths: 0,
      isToggleOn: true,
      loanAmountMin: 0
    };
  }

  selectBankHandler = value => {
    this.setState(prevState => ({
      ...prevState,
      selectedLoanId: undefined,
      selectedBankId: value
    }));
  };

  selectLoanHandler = value => {
    this.setState(prevState => ({
      ...prevState,
      selectedLoanId: value
    }));
  };

  // calculateLoanHandler = value => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     fixedInterestRate: value
  //   }));
  // };

  render() {
    return (
      <div>
        <h1>Loan Master</h1>
        <SelectBank onChange={this.selectBankHandler} />
        {this.state.selectedBankId ? (
          <SelectLoan
            loanId={this.state.selectedLoanId}
            bankId={this.state.selectedBankId}
            onChange={this.selectLoanHandler}
          />
        ) : null}
        {this.state.selectedBankId && this.state.selectedLoanId ? (
          <Inputs
            bankId={this.state.selectedBankId}
            loanType={this.state.selectedLoanId}
            setLoanAmount={st => {
              console.log("SET Loan Amount", st);
              this.setState(st);
            }}
            setYearsFixed={st1 => {
              console.log("SET Years Fixed", st1);
              this.setState(st1);
            }}
                setMonthsFixed={st2 => {
              console.log("SET Months Fixed", st2);
              this.setState(st2);
            }}
                      />
        ) : null}
        {this.state.selectedLoanId ? <Toggle
          // loan={this.calculateLoanHandler}
          clickToggleButton={() => {
            this.setState({ isToggleOn: false });
          }}
        /> : null }
        {!this.state.isToggleOn ? (
          <Calculations loanAmount={this.state.loanAmountMin} yearsFixed={this.state.yearsFixed} monthsFixed={this.state.monthsFixed}/>
        ) : null }
      
      </div>
    );
  }
}

export default Calculator;
