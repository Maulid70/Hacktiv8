/**
 * =================
 * Belanja di warung
 * =================
 * 
 * [Description]
 * Ibu meminta tolong kamu untuk belanja di warung.
 * Ibu akan memberikan sejumlah uang dan satu jenis barang yang harus dibeli.
 * Warung tersebut hanya menjual:
 * 1. Wafer seharga 15000
 * 2. Bayam seharga 5000
 * 3. Indomie seharga 2000
 * 
 * [Instruction]
 * Hitunglah berapa barang yang dapat dibeli dengan jumlah uang yang telah
 * diberikan dan sisa kembalian uang jika ada.
 * 
 * [Example]
 * var @belanja = 'wafer'
 * var @uang = 40000
 * 
 * OUTPUT
 * 'Kamu membeli 2 wafer dan memiliki kembalian sebanyak 10000'
 * 
 * Karena ibu memberikan uang 40000 dan ingin membeli wafer. Maka kamu akan mendapatkan 2 wafer
 * (2 x 15000) serta memiliki kembalian 10000.
 * 
 * [Asumsi]
 * - Uang akan selalu lebih besar atau sama dengan dari harga barang yang akan dibeli.
 * - Barang yang dibeli hanya wafer, bayam, atau indomie
 */

var belanja = 'bayam'
var uang = 103000
// Output yang diinginkan => Kamu membeli 51 indomie dan memiliki kembalian sebanyak 1000
// Write your code here

// harga barang
var wafer = 15000
var bayam = 5000
var indomie = 2000

var jumlahBarang = 0
var sisa = 0
switch (belanja) {
    case 'wafer':
        jumlahBarang = Math.trunc(uang/wafer)
        sisa = uang%wafer
        break;
    case 'bayam':
        jumlahBarang = Math.trunc(uang/bayam)
        sisa = uang%bayam
        break;
    case 'indomie':
        jumlahBarang = Math.trunc(uang/indomie)
        sisa = uang%indomie
        break;
    default:
        break;
}

console.log(`Kamu membeli ${jumlahBarang} ${belanja} dan memiliki kembalian sebanyak ${sisa}`);
