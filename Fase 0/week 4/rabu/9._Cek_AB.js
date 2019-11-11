function checkAB(num) {
    // you can only write your code here!
    var tmpA = 0
    for(i = 0; i < num.length; i++){
        if(num[i]=== 'a'){
            tmpA = i
        }
    }
    var tmpB = 0
    for(j = 0; j < num.length; j++){
        if(num[j] === 'b'){
            tmpB = j
        }
    }
    console.log(tmpA, tmpB);
    
    var hasil = tmpB - tmpA
    if(hasil == 4 || hasil == (-4)){
        return true
    }else{
        return false
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false