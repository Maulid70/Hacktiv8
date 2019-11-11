function diagonalDifference(arr) {
  // Write your code here
  var tmp = 0;
  var a = 0;
  var tengah = (arr.length - 1)/2
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j ) {
        a += arr[i][j];
      }
    //   console.log(a);
    //   console.log(b);
    }
}
var b = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i+j === arr.length - 1 ) {
        b += arr[i][j];
      }
    }
}
tmp = Math.abs(a-b)
  return tmp;
}

console.log(diagonalDifference([[11, 2, 4], 
                                [4, 5, 6],
                                [10, 8, -12]]));
