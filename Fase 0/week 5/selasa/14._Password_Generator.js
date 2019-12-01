function changeVocals (str) {
  //code di sini
  var strNew = ''
  for(i = 0; i < str.length; i++){
    if(str[i] === 'a'){
      strNew += 'b'
    } else if(str[i] === 'A'){
      strNew += 'B'
    } else if(str[i] === 'i'){
      strNew += 'j'
    } else if(str[i] === 'I'){
      strNew += 'J'
    } else if(str[i] === 'u'){
      strNew += 'v'
    } else if(str[i] === 'U'){
      strNew += 'V'
    } else if(str[i] === 'e'){
      strNew += 'f'
    } else if(str[i] === 'E'){
      strNew += 'F'
    } else if(str[i] === 'o'){
      strNew += 'p'
    } else if(str[i] === 'O'){
      strNew += 'P'
    } else{
      strNew += str[i]
    }
  }
  return strNew
}

function reverseWord (str) {
  //code di sini
  var balik = ''
  for(i = str.length - 1; i >= 0; i--){
    balik += str[i]
  }
  return balik
}

function setLowerUpperCase (str) {
  //code di sini
  var tmp = ''
  var alphaB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var alphaK = 'abcdefghijklmnopqrstuvwxyz'
  var ketemu
  for (i = 0; i < str.length; i++) {
      ketemu = false
      for (j = 0; j < 26; j++) {
          // cek jika ketemu huruf besar, tmp concat dengan huruf kecil
          if (str[i] === alphaB[j]) {
              tmp += alphaK[j]
              ketemu = true
          }
          
          // cek jika ketemu huruf kecil, tmp concat dengan huruf besar
          if (str[i] === alphaK[j]) {
              tmp += alphaB[j]
              ketemu = true
          }

          // jika KETEMU 1 huruf, langsung break aja, ga perlu lanjut ke huruf selanjutnya
          if (ketemu === true) {
              break
          }
      }

      // jika TIDAK KETEMU 1 huruf, langsung concat aja apapun itu huruf nya 
      if(ketemu === false) {
          tmp += str[i]
      }
  }
  return tmp
}

function removeSpaces (str) {
  //code di sini
  var tmpNew = ''
  for(i = 0; i < str.length; i++){
    if(!(str[i] === ' ')){
      tmpNew += str[i]
    }
  }
  return tmpNew
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 6){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  name = changeVocals(name);
  name = reverseWord(name);
  name = setLowerUpperCase(name)
  name = removeSpaces(name)
  return name;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
