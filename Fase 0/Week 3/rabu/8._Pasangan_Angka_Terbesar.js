function pasanganTerbesar(num) {
    // you can only write your code here!
    var str = String(num)

    var arr = []
    for(i = 0; i < str.length - 1; i++){
        arr.push(Number(str[i]+str[i+1]))
    }
    var temp = arr[0]
    for(i = 1; i < arr.length; i++){
        if(arr[i] > temp){
            temp = arr[i]
        }
    }
    return temp;
}

  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99