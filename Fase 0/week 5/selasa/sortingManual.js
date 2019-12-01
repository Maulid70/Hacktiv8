var arr = [2,1,4,6,8,3,1,3,6,8]
var tmp = 0
for(i = 0; i < arr.length; i++){
    for(j = i+1 ; j < arr.length; j++){
        if(arr[i] > arr[j]){
            tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
        }
    }
}

var jumlah = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length -1]) {
        jumlah += 1
    }
}
console.log(arr);
console.log(jumlah);

