import numeral from 'numeral';

export const moneyFormatter = (value: number): string => {
  switch (true) {
    case value < 0.05:
      return numeral(value).format('$0,0.00000000');
    case value < 5:
      return numeral(value).format('$0,0.00000');
    default:
      return numeral(value).format('$0,0.00');
  }
};

export const abbreviatedNumberFormatter = (
  value: number,
  isCurrency?: boolean
): string => {
  return numeral(value).format(isCurrency ? '$0.0a' : '0.0a');
};

export const percentageFormatter = (
  value: number,
  isPercentage?: boolean
): string => {
  return numeral(isPercentage ? value : value / 100).format('0.00%');
};

export const exponentialFormatter = (value: number): string => {
  return numeral(value).format('0.0e+0');
};
