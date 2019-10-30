var arr = [[1,2,3],
            [4,5,6],
            [7,8,9]]   

    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(i == j && arr[0].length == j && arr[i][0] == j){
                console.log(arr[i][j]);
            }
        }
    }

