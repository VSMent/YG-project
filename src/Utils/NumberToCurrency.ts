/* eslint-disable @typescript-eslint/ban-ts-comment */
const numberToCurrency = (number: number) => {
  return new Intl.NumberFormat('uk-UA', {
    currencyDisplay: 'narrowSymbol',
    notation: 'standard',
    style: 'currency',
    maximumFractionDigits: 2,
    minimumIntegerDigits: 1,
    // @ts-ignore
    roundingMode: 'halfCeil',
    roundingPriority: 'auto',
    currency: 'UAH',
  }).format(number)
}

export default numberToCurrency
