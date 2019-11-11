function coba(arr){
var hasil = []
var b = []
var a = []
for(i = 0; i < arr[i].length; i++){
    if(arr[i]%2 === 0){
        a.push(arr[i])
    }else{
        b.push(arr[i])
    }
    hasil.push(a)
}
return hasil
}

console.log(coba([3,8,11,12,15,17,21,30,2,0,15]));