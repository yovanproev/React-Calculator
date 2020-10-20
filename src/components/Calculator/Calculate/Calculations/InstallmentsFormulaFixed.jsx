
export const FixedInstallmentsFormulaReturnInstalment = (amount, years, months, rate) => { 
  const paymentPeriods = parseFloat(years * 12) + parseFloat(months); 
  const monthlyInterestRate = rate / 12 / 100; 
  const monthlyInstallment = ((parseFloat(amount) * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -paymentPeriods))); 
       return monthlyInstallment.toFixed(2);
   }

export const FixedInstallmentsFormulaReturnTotalPayment = (amount, years, months, rate) => { 
  const paymentPeriods = parseFloat(years * 12) + parseFloat(months); 
  const monthlyInterestRate = rate / 12 / 100; 
  const monthlyInstallment = ((parseFloat(amount) * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -paymentPeriods))); 
  const totalPayment = monthlyInstallment * paymentPeriods; 
       return totalPayment.toFixed(2);
   }

   export const FixedInstallmentsFormulaReturnTotalInterest = (amount, years, months, rate) => { 
    const paymentPeriods = parseFloat(years * 12) + parseFloat(months); 
    const monthlyInterestRate = rate / 12 / 100; 
    const monthlyInstallment = ((parseFloat(amount) * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -paymentPeriods))); 
    const totalPayment = monthlyInstallment * paymentPeriods; 
    const totalInterest = totalPayment - parseFloat(amount); 
       return totalInterest.toFixed(2);
     }

