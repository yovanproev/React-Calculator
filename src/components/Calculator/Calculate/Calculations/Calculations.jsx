import React, { Component } from "react";

import "./Calculations.css"

class Calculations extends Component {
 state ={
  loanAmount: Number
  
}

handleChange(event) {
    this.setState({loanAmount: event.target.value});
  }
  
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.loanAmount);
    event.preventDefault();
  }
 
  calculateLoan = (amount, years, months, rate) => { 
    const paymentPeriods = parseFloat(years * 12) + parseFloat(months); 
    const monthlyInterestRate = parseFloat(rate / 12); 
    const monthlyInstallment = (parseFloat(amount) * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -paymentPeriods)); 
    const totalPayment = monthlyInstallment * paymentPeriods; 
    const totalInterest = totalPayment - parseFloat(amount); 
  return   totalPayment.toFixed(2)  ;
  }

  

  render () {
return (  

              <div>
                <h5>Пресметка</h5>
                <form onSubmit={this.handleSubmit}>
                 <div className="initialResults">
                    <span class="input-group-text">Месечна Рата</span>
                    <input
                      type="number"
                      step="0.01"
                      disabled
                      value={this.calculateLoan(1000, 5, 0, 5).totalInterest}
                    />
                  </div>
                            
                 <div className="initialResults">
                    <span class="input-group-text">Севкупно за плаќање</span>
                    <input
                      type="number"
                      step="0.01"
                      disabled
                      value={this.calculateLoan(1000, 5, 0, 5)}
                    />
                  </div>
                
                 <div className="initialResults">
                    <span class="input-group-text">Вкупна камата</span>
                    <input
                      type="number"
                      step="0.01"
                      disabled
                      value={this.calculateLoan(1000, 5, 0, 5)}
                    />
                    </div>
                  </form>
                </div>
              )}}

export default Calculations;