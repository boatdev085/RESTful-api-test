const StepTaxRate = [
  { id: 1, start: 0, end: 150000, rate: 0 },
  { id: 2, start: 150001, end: 300000, rate: 0.05 },
  { id: 3, start: 300001, end: 500000, rate: 0.1 },
  { id: 4, start: 500001, end: 750000, rate: 0.15 },
  { id: 5, start: 750001, end: 1000000, rate: 0.2 },
  { id: 6, start: 1000001, end: 2000000, rate: 0.25 },
  { id: 7, start: 2000001, end: 5000000, rate: 0.3 },
  { id: 8, start: 5000001, end: 5000001, rate: 0.35, last: true },
];
const summaryIncome = (income) => {
  if (!income) return 0;
  let countTax = 0;
  let summaryTax = 0;
  for (let i = 0; i < StepTaxRate.length; i++) {
    if (
      (income >= StepTaxRate[i].start && income <= StepTaxRate[i].end) ||
      i === StepTaxRate.length - 1
    ) {
      summaryTax = income - StepTaxRate[i - 1].end;
      summaryTax = summaryTax * StepTaxRate[i].rate;
      break;
    } else {
      if (i !== 0) {
        countTax += StepTaxRate[i - 1].end * StepTaxRate[i].rate;
      }
    }
  }
  return summaryTax + countTax;
};

module.exports = { summaryIncome };
