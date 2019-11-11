function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var hasil = []
    for(i = 0; i <= angka; i++){
        if(angka % i == 0){
           hasil.push(i)
        }
    }
    // console.log(hasil);
    if (hasil.length == 1){
        return 2
    }
    
    var jumlah = []
    var tengah = hasil.length/2
    // console.log(tengah);
    for(i = 0; i < hasil.length; i++){
        if(tengah === i){
            jumlah.push(hasil[i],hasil[i-1])
        }
    }
    var tambah = 0
    var strTambah = String(jumlah)
    // console.log(strTambah);
    
    for(i = 0; i < strTambah.length; i++){
            tambah = i
            // console.log(i);
        }
    // console.log(tambah);
    return tambah
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2