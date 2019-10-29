// var n = 9;
// for( var i = n; i >= 1; i-- ){
//     var tampung = "";
//     for(var j = i; j >= 1; j--){
//         // tampung = tampung + '*';
//         tampung += "";
//     for( var k = 1; k >= (2*j)-i; k++){
//         tampung += k;
//     }
//     }
//     console.log(tampung);
// }
var a;
var b;
var c;

for(a = 10; a >= 0; a--){
    for(b = 0; b < a; b++){
        console.log(' ');
    }
    for(c = 10; c >= a; c--){
        console.log("*");
    }
    console.log(' ');
}