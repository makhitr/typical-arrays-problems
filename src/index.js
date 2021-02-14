
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;
  let minNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (minNum > array[i]) minNum = array[i]
  }
  return minNum;
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;
  let maxNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (maxNum < array[i]) maxNum = array[i];
  }
  return maxNum;
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;
  let sumNum = 0;
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    sumNum += array[i];
    j += 1;
  }
  return sumNum / j;
}
