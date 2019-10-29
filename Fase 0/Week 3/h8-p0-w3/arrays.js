// var numbers = [1,2,3,4,5]

// for (let i = 0; i < numbers.length; i++) {
//     var bintang ='';
//     for (let j = 0; j < numbers.length; j++) { 
//         bintang = bintang + "*";       
//     }
//     console.log(bintang);
// }

// var names = ["Agus", "Budi", "Indra"];

// for (let i = 0; i < names.length; i++) {
//     let tampung = '';
//     for (let j = 0; j < names[i].length; j++) {
//         tampung = tampung + names[i][j] + ' ';
//     }
//     console.log(tampung);
// }
for(i = 1; i <= 9; i++){
    var star = '';
    for(j = 0; j <= 9; j++){
        star += '*';
    }
    console.log(star);
}