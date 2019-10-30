function palindrome(kata){
    let tampungKata = ''
    for(i = kata.length - 1; i >= 0; i--){
        tampungKata += kata[i]
    }
    if(tampungKata === kata){
        return true
    }else{
        return false
    }
    return tampungKata
}
console.log(palindrome('katak'));
console.log(palindrome('blanket')); 
console.log(palindrome('civic')); 
console.log(palindrome('kasur rusak')); 
console.log(palindrome('mister'));