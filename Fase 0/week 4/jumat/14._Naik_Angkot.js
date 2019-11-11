function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var turun = []
    for(i = 0; i < arrPenumpang.length; i++){
        var naik = {
            penumpang : '',
            naikDari : '',
            tujuan : '',
            bayar : 0
        }
        naik.penumpang = arrPenumpang[i][0]
        naik.naikDari = arrPenumpang[i][1]
        naik.tujuan = arrPenumpang[i][2]
        var a = 0
        var b = 0
        for(j = 0; j < rute.length; j++){
            if(naik.naikDari === rute[j]){
                a = j
            }if(naik.tujuan === rute[j]){
                b = j
            }
            naik.bayar = (b-a)*2000
        }
        turun.push(naik)
    }
    return turun
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]