import React, { useState, useEffect } from "react";
import { fetchLoansByBankId } from "../../../data/fetchData";

const Inputs = ({ 
  bankId, 
  loanType, 
  setLoanAmount, 
  setYearsFixed, 
  setMonthsFixed
}) => {
  const [bankData, setBankData] = useState(null);
  const [loan, setLoan] = useState(null);
  // const [loanAmountMin, setLoanAmountMin] = useState(null);

    useEffect(() => {
    const data = bankId ? fetchLoansByBankId(bankId) : null;
    let selectedLoan = data.filter(loan => loan.id === loanType);
    if (selectedLoan.length > 0) {
      selectedLoan = selectedLoan[0];
    } else {
      selectedLoan = null;
    }
    setBankData(data);
    setLoan(selectedLoan);
  }, [bankId, loanType]);

  if (!bankData) return <p>Loading ...</p>;

  // const calculateFn = getFormulaByLoanType(loan.id);
  // console.log(calculateFn);

  return (
    bankData &&
    loan && (
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
        {loan.variableInterestRate && (
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
              value={loan.variableInterestRate}
            />
          </div>
        )}
        <div className="inputFields">
          <p className="description">Износ на кредит</p>{" "}
          <span className="signs">МКД</span>
          <input
            type="number"
            placeholder="Износ на кредит"
            min="0"
            step="1000"
            defaultValue={loan.loanAmountMin}
            onChange={e => {
              setLoanAmount({ loanAmountMin: e.target.value });
            }}
          />
        </div>
        <div className="inputFields">
          <p className="description">Години и месеци со фиксна камата</p>{" "}
          <input
            type="number"
            placeholder="Години"
            min="0"
            max="10"
            step="1"
            defaultValue={loan.yearsFixed}
            onChange={e => {
              setYearsFixed({ yearsFixed: e.target.value });
            }}
          />
          <input
            type="number"
            placeholder="Месеци"
            min="0"
            max="12"
            step="1"
            defaultValue={0}
            onChange={e => {
              setMonthsFixed({ monthsFixed: e.target.value });
            }}
          />
        </div>
        {loan.variableInterestRate && (
          <div className="inputFields">
            <p className="description">Години и месеци со варијабилна камата</p>{" "}
            <input
              type="number"
              placeholder="Години"
              min="0"
              max="25"
              step="1"
              defaultValue={loan.yearsVariable}
            />
            <input
              type="number"
              placeholder="Месеци"
              min="0"
              max="12"
              step="1"
              defaultValue={0}
            />
          </div>
        )}
      </div>
    )
  );
};

export default Inputs;
