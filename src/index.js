module.exports = function toReadable(num) {
  const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen ', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const hundredthCount=Math.floor(num/100)
  const tenthsCount = Math.floor(num / 10 % 10)
  const unitsCount = num % 10
  
    if (num === 0) {
    return 'zero'
}else if (num < 20) {
    return arr[num]
  } else if ( num<=99) {
        return `${arrDozens[tenthsCount]}  ${arr[unitsCount]}`
  } else if (num <= 999) {

    return `${arr[hundredthCount]} hundred ${arrDozens[tenthsCount]} ${arr[unitsCount]} `
  }
}
