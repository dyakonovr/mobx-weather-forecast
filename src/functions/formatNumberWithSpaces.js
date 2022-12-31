export function formatNumberWithSpaces(s) {
  let newString = s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  if (newString[newString.length - 1] === ' ') newString = newString.slice(0, -1);
  return newString;
}