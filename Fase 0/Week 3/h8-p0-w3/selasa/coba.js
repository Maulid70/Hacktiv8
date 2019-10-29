// var angka = ['21', '1998', '05']
// var tampung = []
// for (let i = 0; i < angka.length; i++) {
//         tampung.push(Number(angka[i]))
//         console.log(tampung);
    
// }

// console.log(tampung.sort())



// for (let i = 1; i <= 9; i++) {
//         var tampung = ''
//         for(j = 1; j <= i; j++){
//                 tampung = tampung + "b"
//         }        
//         console.log(tampung);
// }

//b
//bb
//bbb
//bbbb
//bbbbb
// let i = 1
// var tampung = ''

// while (i <= 5) {
//         tampung =''
//         let j = 1
//         while (j <= i) {
//                 tampung += 'a'
//                 j++
//         }
//         console.log(tampung);
//         i++
// }
// console.log(i,  tampung);

// for(i = 1; i <= 9; i++){
//         let tampung = ''
//         for(j = 1; j <= 10-i; j++){
//                 tampung += 'a'
//         }
//         console.log(tampung);
// }


var papanCatur = [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""]
]

// write code here

for(let i = 0; i < papanCatur.length; i++){
        for(let j = 0; j < papanCatur[i].length; j++){
                if((i % 2 === 0) && (j % 2 === 0) || (i % 2 === 1) && (j % 2 === 1)){
                        papanCatur[i][j] = '*'
                } else {
                        papanCatur[i][j] = ' '
                }
        }
}

console.log(papanCatur);

// output
// [
//         ["*", "#", "*", "#", "*", "#", "*", "#"],
//         ["#", "*", "#", "*", "#", "*", "#", "*"],
//         ["*", "#", "*", "#", "*", "#", "*", "#"],
//         ["#", "*", "#", "*", "#", "*", "#", "*"],
//         ["*", "#", "*", "#", "*", "#", "*", "#"],
//         ["#", "*", "#", "*", "#", "*", "#", "*"],
//         ["*", "#", "*", "#", "*", "#", "*", "#"],
//         ["#", "*", "#", "*", "#", "*", "#", "*"]
// ]