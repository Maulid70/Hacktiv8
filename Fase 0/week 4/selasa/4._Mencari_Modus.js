function cariModus(arr) {
    // you can only write your code here!
    var tmp = []
    for(i = 0; i < arr.length; i++){
        var counter = 0
        for(j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                counter += 1
            }
        }
        tmp.push(counter)
    }
    var max = tmp[0]
    var indexTerbesar = 0
    for(i = 1; i < tmp.length; i++){
        if(max < tmp[i]){
            max = tmp[i]
            indexTerbesar = i
        }
    }
    if(max === tmp.length){
        return -1
    }
    if(max == 1){
        return -1
    }
    // console.log(max);
    return arr[indexTerbesar]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1