// function mundur(num){
//     if(num === 0){
//         return
//     }
//     console.log(num);
//     return mundur(num-1)
// }


// console.log(mundur(8));

// function mundur(arr){
//     if(arr.length === 1){
//         return arr
//     }
//    return mundur(arr.slice(1)).concat([arr[0]])
// }


// console.log(mundur([3,4,5,6,7]));


// turun
function bintang(num){
    if(num === 0){
        return
    }
    let tmp = ''
    for(i = 0; i < num; i++){
        tmp += '*'
    }
    console.log(tmp);
    bintang(num-1)
    
}
bintang(5)

//naik
// function bintang(num){
//     if(num === 0){
//         return
//     }

//     bintang(num-1)

//     let tmp = ''
//     for(i = 0; i < num; i++){
//         tmp += '*'
//     }
//     console.log(tmp);
    
// }

// bintang(5)