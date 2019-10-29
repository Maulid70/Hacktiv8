/**
 * =============
 * Panas Jakarta
 * =============
 * 
 * [Instruction]
 * Buatlah pseudocode untuk kasus bedikut:
 * Jakarta sedang panas, seorang student phase 0 ingin menurunkan suhu badannya
 * tergantung dari tingginya suhu (dalam celcius) di luar ruangan.
 * 1. Jika suhu <= 26, maka tidak menggunakan kipas atau AC
 * 2. Jika suhu <= 28, maka menggunakan kipas tangan
 * 3. Jika suhu <= 30, maka menggunakan kipas angin
 * 4. Jika suhu > 30, maka menggunakan AC
 * 
 * Tampilkan apa yang akan student tersebut lakukan jika suhu udara adalah x?
 */
// Write pseudocode here
SET suhu ;

if ( suhu <= 26){
    PRINT "Tidak menggunakan kipas angin"
} else if ( suhu > 26 && suhu <= 28) {
    PRINT " Menggunakan kipas tangan"
} else if (suhu > 28 && suhu <= 30 ) {
    PRINT "Menggunakan kipas angin"
} else {
    PRINT " Menggunakan AC"
}
ENDIF