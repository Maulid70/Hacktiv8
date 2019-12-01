var word = 'Hello Word'
// atau rubah dulu ke kecil
// var kecilWord = word.toLowerCase()
var tmp = ''
var hitung = 0
for(i = 0; i < word.length; i++){
    if(word[i] == 'o'){
        hitung ++
    }
    if(word[i] =='a' || word[i] == 'A'){
        tmp += '4'
    }else if(word[i] == 'i' || word[i] == 'I'){
        tmp += '1'
    }else if(word[i] == 'u' || word[i] == 'U'){
        tmp += '7'
    }else if(word[i] == 'e' || word[i] == 'E'){
        tmp += '3'
    }else if(word[i] == 'o' || word[i] == 'O'){
        tmp += '0'
    }else{
        tmp += word[i]
    }
}
console.log(tmp);

console.log(hitung);
