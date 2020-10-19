import React, { Component } from "react";
import { fetchAllBanks } from "../../../data/fetchData";


class SelectBank extends Component {
  state = {
    banks: []
  }

  componentDidMount() {
    const banksData = fetchAllBanks();
    this.setState({banks : banksData})
  }

  render() {
    if (this.state.banks.length === 0) return <p>Loading ...</p>

    return (
      <div className="form">
      <div className="optionsFields">
          <i className="fas fa-university signs"></i>
          <select
            className="selectFields"
            onChange={(e) => this.props.onChange(parseInt(e.target.value))}
          >
            <option key={0} value={0}>{"Одберете банка"}</option>
            {
              this.state.banks.map(bank => <option key={bank.id} value={bank.id}>{bank.name}</option>)
            }
          </select>
      </div>
      </div>
    );
  }
}

export default SelectBank;
