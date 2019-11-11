function ubahHuruf(kata) {
    // you can only write your code here!
    var tmp = ''
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'
    for(i = 0; i < kata.length; i++){
        for(j = 0; j < alphabets.length; j++){
            if(kata[i] === alphabets[j]){
                tmp += alphabets[j+1]
            }
        }
        // console.log(kata[i], alpha[i])
    }
    return tmp
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu