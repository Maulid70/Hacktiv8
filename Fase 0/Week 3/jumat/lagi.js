function andWord(kalimat){

  var fully = ''
  for(i = 0; i < kalimat.length; i++){
    if(kalimat[i] === ' '){
      fully += ' dan '
    }else{
      fully += kalimat[i]
    }
  }
  return fullys
}

console.log(andWord('Mari kita budayakan prilaku peduli dengan sesama'));