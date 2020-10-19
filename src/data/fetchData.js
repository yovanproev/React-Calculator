import loansData from "./loans.json"
import banksData from "./banks.json"
import loanTypes from "./loanTypes.json"

export const fetchAllBanks = () => {
  return banksData.data;
}

export const fetchAllLoanTypes = () => {
  return loanTypes.data;
}


export const fetchBankById = (bankId) => {
  const data = banksData.data.filter(bank => bank.id === parseInt(bankId));
  if(data.length > 0) {
    return data;
  } else {
    throw new Error(`No bank found by id - ${bankId} `)
  }
}

export const fetchLoansByBankId = (bankId) => {
  const data = loansData.data.filter(bank => bank.bankId === parseInt(bankId));
  if (data.length > 0) {
    return data[0].loans;
  } else {
    throw new Error(`No data found for bank - ${bankId}`)
  }
}

export const getFormulaByLoanType = loanId => {
  switch (loanId) {
    case 1:
      function formula (amount, years, months, rate) { const numpay = parseFloat((years * 12) + months); const monthly = parseFloat(rate / 12); const payment = (amount * monthly) / (1 - Math.pow(1 + monthly, -numpay)); const total = payment * numpay; const interest = total - amount; return ({ total, interest }) };
      return formula;
    default:
      throw new Error("No formula found")
  }
}