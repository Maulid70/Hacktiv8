function numberArrayOperation(kaliNum) {
  var tmp = 0;
  for (i = 0; i < kaliNum.length; i++) {
    if (kaliNum[i] % 2 === 1) {
      tmp += kaliNum[i] * 4;
    } else if (kaliNum[i] % 2 === 0 && kaliNum[i] % 4 !== 0) {
      tmp += kaliNum[i] * 3;
    } else if (kaliNum[i] % 4 === 0) {
      tmp += kaliNum[i] * 5;
    }
  }
  return tmp;
}
console.log(numberArrayOperation([1, 2, 3, 4, 5]));
console.log(numberArrayOperation([22, 4, 5, 9, 44, 8, 12, 23])); // 554

console.log(numberArrayOperation([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ])); // 370
