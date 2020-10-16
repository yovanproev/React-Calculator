import React, {useState, useEffect}  from "react";

import "../general.css";
import { fetchLoansByBankId } from "../../../data/fetchData"

const Inputs = ({bankId, loanType}) => {

  const [bankData, setBankData] = useState(null);
  const [loan, setLoan] = useState(null);

  useEffect(() => {
    const data = bankId ? fetchLoansByBankId(bankId) : null;
    setBankData(data);
    let selectLoan = data.filter(loan => loan.id === loanType);
    if (selectLoan.length > 0) {
      selectLoan = selectLoan[0];
    } else {
      selectLoan = null;
    }
    setLoan(selectLoan)
  }, [bankId, loanType])

  if(!bankData) return <p>Loading ...</p>

  return bankData && (
    <div className="form">
      <div className="inputFields">
        <p className="description">Фиксна каматна стапка</p>

        <span className="signs">
          {" "}
          % <i className="fas fa-compress-arrows-alt ml-2"></i>{" "}
        </span>
        <input
          value={loan.interestRate}
          type="number"
          placeholder="Фиксна каматна стапка"
          min="0"
          max="100"
          step="0.1"
        />
      </div>
      {loan.variableInterestedRate && 
      <div className="inputFields">
        <p className="description">Варијабилна каматна стапка</p>
        <span className="signs">
          {" "}
          % <i className="fas fa-arrows-alt-v ml-2 "></i>{" "}
        </span>

        <input
          type="number"
          placeholder="Варијабилна каматна стапка"
          min="0"
          max="100"
          step="0.1"
          value={loan.variableInterestedRate}
        />
      </div>
      }
      <div className="inputFields">
        <p className="description">Износ на кредит</p>{" "}
        <span className="signs">МКД</span>
        <input
          type="number"
          placeholder="Износ на кредит"
          min="0"
          step="1000"
        />
      </div>
      <div className="inputFields">
        <p className="description">Години и месеци со фиксна камата</p>{" "}
        <input type="number" placeholder="Години" min="0" max="10" step="1" />
        <input type="number" placeholder="Месеци" min="0" max="12" step="1" />
      </div>
      <div className="inputFields">
        <p className="description">Години и месеци со варијабилна камата</p>{" "}
        <input type="number" placeholder="Години" min="0" max="25" step="1" />
        <input type="number" placeholder="Месеци" min="0" max="12" step="1" />
      </div>
    </div>
  );
};

export default Inputs;
