

function numberArrayOperation(arr) {
    var results = [];
    var total = 0;
  
    for (var i = 0; i <= arr.length - 1; i++) {
      var inspector = arr[i];
      if (inspector % 4 === 0) {
        inspector *= 5;
        results.push(inspector);
      } else if (inspector % 2 === 0) {
        inspector *= 3;
        // console.log(inspector);
        results.push(inspector);
        // console.log(results);
      } else if (inspector % 2 !== 0) {
        inspector *= 4;
        results.push(inspector);
        // console.log(results);
      }
    }
  
    // console.log(results);
  
    for (var j = 0; j <= results.length - 1; j++) {
      total += results[j];
    }
  
    // console.log(total);
  
    return results;
  }
  
  console.log(numberArrayOperation([ 1, 2, 4 ])); // 554
  console.log(numberArrayOperation([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ])); // 370