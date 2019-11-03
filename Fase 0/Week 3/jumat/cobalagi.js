function danWorld(kalimat) {
  var hasil = "";
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === " ") {
      hasil += " dan ";
    } else {
      hasil += kalimat[i];
    }
  }
  return hasil;
}
console.log(danWorld("Matilah dalam keadaan dan kondisi terbaik"));
