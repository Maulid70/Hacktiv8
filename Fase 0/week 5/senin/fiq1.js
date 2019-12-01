function mahasiswa(data){
    var obj = {}
    for(i = 0; i < data.length; i++){
        var jur = data[i].jurusan
        if(obj[jur] === undefined){
            obj[jur] = {
                rataRataNilai : data[i].nilai,
                students : [data[i].nama]
            }

            }
            else{
                obj[jur].rataRataNilai += data[i].nilai,
                obj[jur].students.push(data[i].nama)
            }
            
        }
        for (const key in obj) {
            obj[key].rataRataNilai /= obj[key].students.length 
        }
        return obj
    }
var students = [{
    nama: 'Aan',
    jurusan: 'Ekonomi',
    nilai: 90
},
{
    nama: 'Beben',
    jurusan: 'Fisika',
    nilai: 50
}, {
    nama: 'Andi',
    jurusan: 'Fisika',
    nilai: 80
}, {
    nama: 'Sapri',
    jurusan: 'Ekonomi',
    nilai: 60
}]

console.log(mahasiswa(students))