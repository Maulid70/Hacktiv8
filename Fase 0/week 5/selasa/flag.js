function checkG(string){
    var ketemu = false
    for(i = 0; i < string.length; i++){
        if(string[i] == 'g'){
            ketemu = true
        }
    }
    return ketemu
}

console.log(checkG('bumbu'));
