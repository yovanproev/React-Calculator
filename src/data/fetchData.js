import loansData from "./loans.json";
import banksData from "./banks.json";
import loanTypes from "./loanTypes.json";


export const fetchAllBanks = () => {
  return banksData.data;
};

export const fetchAllLoanTypes = () => {
  return loanTypes.data;
};

export const fetchBankById = bankId => {
  const data = banksData.data.filter(bank => bank.id === parseInt(bankId));
  if (data.length > 0) {
    return data;
  } else {
    throw new Error(`No bank found by id - ${bankId} `);
  }
};

export const fetchLoansByBankId = bankId => {
  const data = loansData.data.filter(bank => bank.bankId === parseInt(bankId));
  if (data.length > 0) {
    return data[0].loans;
  } else {
    throw new Error(`No data found for bank - ${bankId}`);
  }
};

// export const getFormulaByLoanType = (loanId, bankId) => {
//   switch (loanId | bankId) {
//     case 1 | 1:
//       return FixedInstallmentsFormula();
//     case 2 | 1:
//       return FixedInstallmentsFormula();
//     case 3 | 1:
//       return FixedInstallmentsFormula();
//     case 1 | 2:
//       return FixedInstallmentsFormula();
//     case 2 | 2:
//       return FixedInstallmentsFormula();
//     case 3 | 2:
//       return FixedInstallmentsFormula();
//     default:
//       throw new Error("No formula found");
//   }
// };
