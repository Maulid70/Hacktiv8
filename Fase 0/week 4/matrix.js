function arr(n){
    var coba = []
    var median = Math.floor(n/2)
    for(i = 0; i < n; i++){
        coba.push([])
        for(j = 0; j < n; j++){
            if(i >= median){
                if(i == j || (i+j) == coba.length-1){
                    coba[i].push('X')
                }else{
                    coba[i].push('.')
                }
            }else{
                coba[i].push('.')
            }
        }
    }
return coba
}
console.log(arr(5));