function proporsi(data){
    var tmp = [[],[],[]]
    for(i = 0; i < data.length; i++){
        if(data[i] == 0){
            tmp[1].push(data[i])
        }else if(data[i] < 0){
            tmp[0].push(data[i])
        }else{
            tmp[2].push(data[i])
        }
    }
    var persen = {
        '%(-)' : (tmp[0].length/data.length*100).toFixed(5) +'%',
        '%(0)' : (tmp[1].length/data.length*100).toFixed(5) +'%',
        '%(+)' : (tmp[2].length/data.length*100).toFixed(5) +'%'
    }
    return persen
}
var angka = [ 2, 4, 5, 6, 7, 0, -9, -6, -5]

console.log(proporsi(angka));
console.log(proporsi([-1, 0, 1]));


//proporsi jenis angka