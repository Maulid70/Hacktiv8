function konversWaktu(input){
var waktu = ''
for(i = input.length-2; i < input.length; i++){
    waktu += input[i]
}
if(waktu == 'PM'){
    hasil = []
    var tmp = ''
    for(i = 0; i < input.length; i++){
        if(input[i]=='.' || tmp.length == 2){
            hasil.push(tmp)
            tmp = ''
        }else{
            tmp += input[i]
        }
    }
    hasil[0] = +hasil[0] + 12
    return hasil[0] + '.' + hasil[1];
}
}

var data = '06.34PM'

console.log(konversWaktu(data));

// output '18.34PM'