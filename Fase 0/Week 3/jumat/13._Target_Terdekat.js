function targetTerdekat(arr) {
    // you can only write your code here!
  var o = 0
  var x = [] 

  for(i = 0; i < arr.length; i++){
    if(arr[i] === o){
      o = i
    }
    else if(arr[i] === x){
      x.push(i)
    }
  }
  var terdekat = 0
  for(i = 0; i < x.length; i++){
   var hasil = Math.abs(o - x[i])
    if(hasil < terdekat || terdekat === 0){
      terdekat = hasil
    }
  }
  return terdekat
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2