import numeral from 'numeral';

export const moneyFormatter = (
  value: number,
  disableUnit?: boolean
): string => {
  let formatString = disableUnit ? '' : '$';
  switch (true) {
    case value < 0.05:
      formatString += '0,0.00000000';
      break;
    case value < 5:
      formatString += '0,0.00000';
      break;
    default:
      formatString += '0,0.00';
      break;
  }
  return numeral(value).format(formatString);
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
