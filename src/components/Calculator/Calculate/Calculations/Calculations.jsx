import React, { Component } from "react";

import FixedInstallmentsFormula from "./installmentsFormula" 
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
 
    render () {
return (  

              <div>
                <h5>Пресметка</h5>
                <form onSubmit={this.handleSubmit}>
                 <div className="initialResults">
                    <span>Месечна Рата</span>
                    <input
                      type="number"
                      step="0.01"
                      disabled
                      value={this.props.FixedInstallmentsFormula}
                    />
                  </div>
                            
                 <div className="initialResults">
                    <span>Севкупно за плаќање</span>
                    <input
                      type="number"
                      step="0.01"
                      disabled
                      value={FixedInstallmentsFormula}
                    />
                  </div>
                
                 <div className="initialResults">
                    <span>Вкупна камата</span>
                    <input
                      type="number"
                      step="0.01"
                      disabled
                      value={FixedInstallmentsFormula}
                    />
                    </div>
                  </form>
                </div>
              )}}

export default Calculations;