const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const formatCash = (numInp = 0, currencyIcon = null, showDecimals = true) => {
  // if it is a not a number return number
  if (Number.isNaN(Number(numInp))) {
    return numInp;
  }
  const num = showDecimals
    ? Number(numInp || 0).toFixed(2)
    : Math.floor(Number(numInp || 0));
  const str = num.toString().replace(/,/g, "");
  // eslint-disable-next-line no-param-reassign
  const currency = `${currencyIcon || ""}`;
  return currency + numberWithCommas(str);
};

export default formatCash;
