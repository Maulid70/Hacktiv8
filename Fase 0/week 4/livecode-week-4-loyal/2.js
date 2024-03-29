/**
 * ===============
 * NARUTO PLAYLIST
 * ===============
 * 
 * [Description]
 * Naruto mempunyai sebuah playlist di handphone nya yang terdiri dari 3 lagu
 * yaitu : "bersama bintang", "jujur", dan "puspa"
 * 
 * Naruto ingin membuat sebuah function untuk mengetahui lagu apa yang sering ia putar
 * ketika sedang latihan.
 * Setiap kali Naruto memutar playlist , hanya ada SATU lagu yang di paling sering di putar oleh Naruto
 * 
 * [Example]
 * 1. ["jujur", "jujur", "puspa", "bersama bintang"] -> lagu yang paling sering di putar yaitu jujur
 *     output: "lagu jujur diputar sebanyak 2 kali"
 *
 * 2. ["jujur", "jujur", "puspa", "puspa", "puspa", "bersama bintang"] -> lagu yang paling sering di putar yaitu puspa
 *     output: "lagu puspa di putar sebanyak 3 kali"
 *
 * [Restrictions]
 * Jika tidak ada lagu yang di putar oleh naruto maka
 * output yang di harapkan adalah : -> "tidak ada lagu yang di putar"
 *
 * Jika input parameter function bukan sebuah array maka
 * output yang di harapkan adalah -> "ini bukan sebuah playlist"
 *
 * [RULES] !!
 * - Dilarang menggunakan Regex (.test, .match dan sebagainya)
 * - Dilarang menggunakan .filter .reduce
 */

function favouritePlaylist(arr) {
  // Write your code here

  var hasil = [0,0,0]

  if(Array.isArray(arr) === false){
    return " Ini bukan sebuah playlist"
  } else if (arr.length === 0 ){
    return " Tidak ada lagu yang di putar"
  } else{
    for( i = 0; i < arr.length; i++){
      if(arr[i] === 'jujur'){
        hasil[0] += 1
      }
      if(arr[i] === 'bersama bintang'){
        hasil[1] += 1
      }
      if(arr[i] === 'puspa'){
        hasil[2] += 1
      }
    
    }
    if( hasil[0] > hasil[1] && hasil[0] > hasil[2]){
      return `lagu jujur diputar sebanyak ${hasil[0]} kali`
    }
    else if( hasil[1] > hasil[0] && hasil[1] > hasil[2]){
      return `lagu bersama bintang diputar sebanyak ${hasil[1]} kali`
    }
    else{
      return `lagu puspa diputar sebanyak ${hasil[2]} kali`
    }
  }
  }
console.log(favouritePlaylist(["jujur", "puspa", "bersama bintang", "jujur", "jujur"])) 
//output: "lagu jujur diputar sebanyak 3 kali"
console.log(favouritePlaylist(["bersama bintang", "bersama bintang", "puspa", "jujur"]))
//output: "lagu bersama bintang diputar sebanyak 2 kali"
console.log(favouritePlaylist(["puspa"])) 
//output: "lagu puspa diputar sebanyak 1 kali"
console.log(favouritePlaylist([]))
//output: "tidak ada lagu yang di putar"
console.log(favouritePlaylist(''))
//output: "ini bukan sebuah playlist"
console.log(favouritePlaylist(50))
//output: "ini bukan sebuah playlist"