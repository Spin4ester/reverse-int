module.exports = function reverse (n) {

  let numStr = Math.abs(n).toString();
  let finalOutput = '';
  
  for (let i = 0; i < numStr.length; i++) {
  finalOutput = `${numStr[i]}${finalOutput}`;
}
  return finalOutput;
}