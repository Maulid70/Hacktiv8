var jenisPakaian = 'Baju';
var pakaianPerluDisetrika = true;
var panjangPakaian  = 15;

if (jenisPakaian === ''){
    console.log("Tentukan pakaian yang ingin disetrika");
} else if (pakaianPerluDisetrika = false) {
    console.log('Silahkan pilih pakaian yang ingin di setrika');
} else {
    if (jenisPakaian === 'Baju' || jenisPakaian === 'Celanan' && panjangPakaian > 20){
    console.log('Pakaian sudah di setrika dan dilipat, terima kasih');
    }else {
    console.log('Pakaian sudah di setrika');
}
}



