import React, { Component } from "react";
import { fetchAllLoanTypes, fetchLoansByBankId } from "../../../data/fetchData";

class SelectLoan extends Component {

  state = {
    loanTypes: [],
    bankLoanTypes: []
  }

  componentDidMount() {
    const loanTypes = fetchAllLoanTypes();
    const bankLoanTypes = fetchLoansByBankId(this.props.bankId);
    this.setState({bankLoanTypes : bankLoanTypes, loanTypes: loanTypes })
  }

  getLoanName = (loanType) => {
    const foundLoan = this.state.loanTypes.filter(loan => loan.id === parseInt(loanType));
    if(foundLoan.length > 0) {
      return foundLoan[0].name;
    } else {
      throw new Error(`No loan for id - ${loanType}`)
    }
  }

  render() {
    console.log(this.props.loanId)
    if (!this.props.bankId) return null
    if (this.state.loanTypes.length === 0) return <p>Loading ...</p>

    return (
      <div className="form">
        <div className="optionsFields">
            <i className="fas fa-search-dollar signs "></i>
            <select
              className="selectFields"
              onChange={(e) => this.props.onChange(parseInt(e.target.value))}
              value={this.props.loanId ? this.props.loanId : '' }
            >
              <option key={0} >Одберете кредит</option>
              {this.state.bankLoanTypes && this.state.bankLoanTypes.map(loan => <option key={loan.id} value={loan.id}>{this.getLoanName(loan.id)}</option>)}
            </select>
        </div>
      </div>
    );
  }
}

export default SelectLoan;
