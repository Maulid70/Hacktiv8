function bandingNilai(nilai){
    var hasil = []
    var a = 0
    var b = 0
    for(let i = 0; i < nilai.length; i++){
        for(let j = 0; j < nilai[i].length; j++){
            if(nilai[0][j] > nilai [1][j]){
                a += 1
            }
            if(nilai[0][j] < nilai [1][j]){
                b += 1
            }
        }
        break;
    }
    hasil.push(a, b)
    return hasil
}
console.log(bandingNilai([[9,7,8],[1,8,3]]));