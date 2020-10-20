
const FixedInstallmentsFormula = (amount, years, months, rate) => { 
  const paymentPeriods = parseFloat(years * 12) + parseFloat(months); 
  const monthlyInterestRate = parseFloat(rate / 12); 
  const monthlyInstallment = (parseFloat(amount) * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -paymentPeriods)); 
  const totalPayment = monthlyInstallment * paymentPeriods; 
  const totalInterest = totalPayment - parseFloat(amount); 
return   totalPayment.toFixed(2);
}

export default FixedInstallmentsFormula;