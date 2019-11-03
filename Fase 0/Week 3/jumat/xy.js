var arr = [['_','_','_'],
           ['_','X','_'],
           ['_','_','Y']]

var arrNew =[]
// var y = ''

for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr[i].length; j++){
        if(arr[i][j] === 'X'){
            arr[i][j] = 'A'
        }
        else if (arr[i][j] === 'Y'){
            arr[i][j] = 'B'
        }
        
    }
    
}
console.log(arr);