import React, { Component } from "react";

import { FixedInstallmentsFormulaReturnInstalment, FixedInstallmentsFormulaReturnTotalInterest, FixedInstallmentsFormulaReturnTotalPayment } from "./InstallmentsFormulaFixed";
import "./Calculations.css";

class Calculations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: props.loanAmount,
      yearsFixed: props.yearsFixed,
      monthsFixed: props.monthsFixed    
    };
    console.log("PROPS", props);
  }

  // handleChange(event) {
  //   this.setState({ loanAmount: event.target.value });
  // }

  // handleSubmit(event) {
  //   alert("An essay was submitted: " + this.state.loanAmount);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div>
        <h5>Пресметка</h5>
        {/* {this.state.loanAmount}
        {this.state.yearsFixed} */}
        <form onSubmit={this.handleSubmit}>
          <div className="initialResults">
            <span>Месечна Рата</span>

            <input
              type="number"
              step="0.01"
              disabled
              value={FixedInstallmentsFormulaReturnInstalment(this.state.loanAmount, this.state.yearsFixed, this.state.monthsFixed, 5)}
            />
          </div>

          <div className="initialResults">
            <span>Севкупно за плаќање</span>
            <input type="number" step="0.01" disabled 
            value={FixedInstallmentsFormulaReturnTotalPayment(this.state.loanAmount, this.state.yearsFixed, this.state.monthsFixed, 5)}
             />
            
          </div>

          <div className="initialResults">
            <span>Вкупна камата</span>
            <input type="number" step="0.01" disabled 
            value={FixedInstallmentsFormulaReturnTotalInterest(this.state.loanAmount, this.state.yearsFixed, this.state.monthsFixed, 5)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Calculations;
