function cariMedian(arr) {
    // you can only write your code here!
    var urut = arr.sort((a, b) => a - b)
    if(arr.length % 2 == 1){
        var median = Math.floor(arr.length/2)
        return arr[median]
    }else {
        median = Math.floor(arr.length/2)
        var tengah = (arr[median] + arr[median-1])/2
        return tengah
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5