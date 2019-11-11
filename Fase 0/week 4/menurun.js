function turun(jumlah){
    var tmp = ''
    var count = 0
    var n = 7
    for(i = 0; i < n; i++){
        var tmp1 = ''
        for(j = 0; j <= i; j++, count++){
            tmp1 += '*'
        }
        tmp1 += '\n'
        tmp += tmp1
    }
    return tmp
}

console.log(turun(5));