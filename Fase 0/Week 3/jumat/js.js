function whosTheWinner(tim){
    
var g = 0
var s = 0
var hasil = ''    
for(i = 0; i < tim.length; i++){
    if(tim[i] === 'Gryffindor'){
        g = g+1
    }else{
        s = s+1
    }
   
    
}
    if(g < s){
    hasil ='Slytherin adalah pemenang'
}
    else if (g > s){
    hasil ='Griffindor adalah pemenang'
}
    else{
    hasil = 'Griffindor dan Slytherin sama kuat dan dilanjutkan penalti kick'
}
return hasil + ' Dengan jumlah score: ' + g +'-' + s
}
console.log(whosTheWinner(['Gryffindor', 'Slytherin','Slytherin']));
console.log(whosTheWinner(['Gryffindor', 'Gryffindor','Slytherin']));
console.log(whosTheWinner(['Gryffindor', 'Slytherin','Slytherin', 'Gryffindor']));