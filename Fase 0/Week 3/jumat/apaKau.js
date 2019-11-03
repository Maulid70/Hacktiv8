var arr = ['smuel', 'zeg', 'mulid', 'udh woy', 'vika', 'udah', 'anjay']
var tmp = []

for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 'a') {
            tmp.push(arr[i])
            break;
        }
        
    }

    tmp.push('push')
    tmp.push('hehe')
    
}

console.log(tmp);

