var arr = [[1,2,3,4,5],[6,7,8,9,10]]

var newArr = []
for(i = 0; i < arr[0].length; i++){
    var tmp = []
    for(j = 0; j < arr.length; j++){
        tmp.push(arr[j][i])
    }
    newArr.push(tmp)
}
console.log(newArr);