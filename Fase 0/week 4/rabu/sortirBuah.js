var arrBuah = [ 'pisang', 'mangga', 'jeruk', 'salak', 'duren']

var buahA = []
for(i = 0; i < arrBuah.length; i++){
    for(j = 0; j < arrBuah[i].length; j++){
        if(arrBuah[i][j] === 'a'){
            buahA.push(arrBuah[i])
            break
        }
    }
}
console.log(buahA);
