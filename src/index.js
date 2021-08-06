module.exports = function toReadable(num) {
  const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const hundredthCount=Math.floor(num/100)
  const tenthsCount = Math.floor(num / 10 % 10)
  const unitsCount = num % 10
  
  if (num === 0) {
    return 'zero'
  } else if (num < 20) {
    return arr[num]
  } else if (num <= 99) {
    const isNotZero = unitsCount !== 0 ? " " + arr[unitsCount] : "";
    return arrDozens[tenthsCount] + isNotZero
 } else if (num <= 999) {
    const isNotZeroTents = tenthsCount !== 0 ? arrDozens[tenthsCount] : "";
    const isZeroTents = tenthsCount !== 0 ? " ": ""
    const isZeroCount=unitsCount !== 0?" ":"" 
    const isNotZeroUnits = unitsCount !== 0 ? arr[unitsCount] : ""

    if (num % 100 === 0) {
     return arr[hundredthCount] + ' hundred'
    }
    if (num % 100 < 20) {
      return arr[hundredthCount] + ' hundred ' + arr[num%100]+ ""
    } else{
      return arr[hundredthCount] + ' hundred' + isZeroTents + isNotZeroTents + isZeroCount + isNotZeroUnits
    }
  }
}
