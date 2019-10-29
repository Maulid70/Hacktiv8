function piramid(n) {
    for(i = 1; i <= n; i++){
        let tampung = ''
        for(j = 1; j <= n - i; j++){
            tampung += '*'
        }
        for(j = 1; j <= (i*2) - 1; j++){
            tampung += ' '
        }
        for(j = 1; j <= n - i; j++){
            tampung += '*'
        }
        console.log(tampung);
    }
    for(i = n-1; i >= 0; i--){
        let tampung = ''
        for(j = 1; j <= n - i; j++){
            tampung += '*'
        }
        for(j = 1; j <= (i*2) - 1; j++){
            tampung += ' '
        }
        for(j = 1; j <= n - i; j++){
            tampung += '*'
        }
        console.log(tampung);
    }
}
piramid(10)