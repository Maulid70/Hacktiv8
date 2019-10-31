var arr = [[1,2,3],
            [4,5,6],
            [7,8,9]]   
let tmp =[]
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(i == j || i+j === arr.length - 1){
                console.log(tmp.push(arr[i][j]));
            }
        }
    }

