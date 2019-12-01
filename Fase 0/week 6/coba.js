function hapusMax(data){
    var hasil = []
    var max = 0
    for(i = 0; i < data.length; i++){
        if(max < data[i]){
            max = data[i]
        }
    }
    for(i = 0; i < data.length; i++){
        if(data[i] < max){
            hasil.push(data[i])
        }
    }
    
    return hasil
}

arr =[1,3,2,4,5,2,6,7,9,5,8,6,8]

console.log(hapusMax(arr));
