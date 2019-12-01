function totalDigitRekursif(angka) {
    // you can only write your code here!
    angka = "" + angka
    // total = 0
    // for(i = 0; i < angka.length; i++){
    //   total += +angka[i]
    // }
    // console.log(total);
    if(angka.length === 0){
      return 0
    }
    return +angka[0] + totalDigitRekursif(angka.slice(1))
    
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5