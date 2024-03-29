
/**
 * -----------
 * Mountain 🗻
 * ------------
 *
 * Instruction
 * -----------
 * Buatlah sebuah fungsi yang akan membuat sebuah gunung. Fungsi ini akan menerima tiga parameter
 * - tinggi dari gunung
 * - lebar dari landscape
 * - tinggi dari landscape
 *
 * Fungsi ini akan membuat sebuah gunung dengan tinggi sesuai dengan yang kita kirimkan.
 * Misal kita mengirimkan tinggi gunung 3 dan lebar landscape 5 dan tinggi landscape 5
 * Maka output yang akan kita hasilkan adalah.
 *
 * Rule
 * ----
 * - HANYA BOLEH menggunakan built in function push dan unshift
 * - Lebar dari landscape dan Tinggi dari landscape haruslah sama
 *   ( jika tidak keluarkan output 'Tinggi dan lebar dari landscape yang akan dibuat haruslah sama')
 * - Minimal tinggi dan lebar landscape adalah 5
 *   ( jika tidak keluarkan output 'Lebar landscape tidak cukup untuk membuat gunung' )
 * 
 * Contoh ukuran 5x5:
 * [
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', 'X', ' ', ' '],
 * [' ', 'X', ' ', 'X', ' '],
 * ['X', ' ', ' ', ' ', 'X']
 *]
 */

function mountainView(height, landscapeHeight, landscapeWidth) {
  // Insert your code here
  if(landscapeHeight !== landscapeWidth){
    return 'Lebar landscape tidak sama dengan tinggi landscape'
  }else if(landscapeWidth < height){
    return 'Lebar landscape tidak cukup untuk membuat gunung'
  }else{
    var gunung = []
    var median = Math.floor(landscapeWidth/2)
    for(i = 0; i < landscapeHeight; i++){
      gunung.push([])
      for(j = 0; j < landscapeWidth; j++){
        gunung[i].push('-')
      }
    }
    for(i = 0; i < gunung.length; i++){
      for(j = 0; j < gunung[i].length; j++){
        if(i >= median){
          if(i == j || i+j == gunung.length-1){
            gunung[i][j] = 'X'
          }
        }
      }
    }
  }
  return gunung
}

console.log(mountainView(3, 6, 5)) // Lebar landscape tidak sama dengan tinggi landscape

console.log(mountainView(3, 2, 2)) // Lebar landscape tidak cukup untuk membuat gunung

console.log(mountainView(3, 5, 5))

/**
 * [
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', 'X', ' ', ' '],
 * [' ', 'X', ' ', 'X', ' '],
 * ['X', ' ', ' ', ' ', 'X']
 *]
 */

console.log(mountainView(4, 7, 7))
/**
 * [
 * [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', 'X', ' ', ' ', ' '],
 * [' ', ' ', 'X', ' ', 'X', ' ', ' '],
 * [' ', 'X', ' ', ' ', ' ', 'X', ' '],
 * ['X', ' ', ' ', ' ', ' ', ' ', 'X']
 *]
 */