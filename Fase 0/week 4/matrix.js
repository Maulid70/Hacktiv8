function arr(n){
    coba = []
    for(i = 0; i < n; i++){
        coba.push([])
        for(j = 0; j < n; j++){
            if(j%2 === 1){
            coba[i].push('*')
            }else{
                coba[i].push('-')
            }
        }
    }
return coba
}
console.log(arr(5));