function balikString(kalimat) {
    var balik = '';
    for(i = kalimat.length - 1; i >= 0; i--){
        balik += kalimat[i];
    }
    return balik;
}
console.log(balikString(kalimat = "Maulid akan menjadi seorang yang ahli dalam logika"));