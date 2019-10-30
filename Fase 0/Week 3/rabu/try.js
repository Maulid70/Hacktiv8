var arr = [[1,2,3],
            [4,5,6],
            [7,8,9]]   

    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(i%2 == 0 && arr[i][j]%2 == 0 || i%2==1 && arr[i][j]%2==1){
                console.log(arr[i][j]);
            }
        }
    }

