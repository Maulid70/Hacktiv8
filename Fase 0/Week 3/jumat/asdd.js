function numberArrayOperation(kaliNum) {
    var hasil = 0
    for(let i =0; i < kaliNum.length; i++){
        if (kaliNum[i]%4 == 0) {
            hasil += 5* kaliNum[i]
        }
        else if (kaliNum[i] % 2 == 0) {
            hasil += 4*kaliNum[i] 
        } else {
            hasil += 3*kaliNum[i]
            
        }
    }
    return hasil
}

console.log(numberArrayOperation([1, 2, 3, 4, 5]));
console.log(numberArrayOperation([ 22, 4, 5, 9, 44, 8, 12, 23 ])); // 554