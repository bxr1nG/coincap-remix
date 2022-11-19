export const shortDateFormatter = (value: number): string => {
  return new Date(value).toLocaleDateString('en-us', {
    month: '2-digit',
    day: '2-digit'
  });
};

export const normalDateFormatter = (value: number): string => {
  return new Date(value).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit'
  });
};
