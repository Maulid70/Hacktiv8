function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var tmp = ''
    var abjadB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var abjadK = 'abcdefghijklmnopqrstuvwxyz'
    var found
    for (i = 0; i < kalimat.length; i++) {
        found = false
        for (j = 0; j < 26; j++) {
            // cek jika ketemu huruf besar, tmp concat dengan huruf kecil
            if (kalimat[i] === abjadB[j]) {
                tmp += abjadK[j]
                found = true
                break
            }
            
            // cek jika ketemu huruf kecil, tmp concat dengan huruf besar
            if (kalimat[i] === abjadK[j]) {
                tmp += abjadB[j]
                found = true
                break
            }

            // jika KETEMU 1 huruf, langsung break aja, ga perlu lanjut ke huruf selanjutnya
            // if (found === true) {
            //     break
            // }
        }

        // jika TIDAK KETEMU 1 huruf, langsung concat aja apapun itu huruf nya 
        if(found === false) {
            tmp += kalimat[i]
        }
    }
    return tmp
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"