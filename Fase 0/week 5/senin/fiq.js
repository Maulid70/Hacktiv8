function mahasiswa(arr){
    var hasilAkhir = []
    // mengelompokkan data sesuai jurusan
    for(i = 0; i < arr.length; i++){
        ketemu = false
        for(j = 0; j < hasilAkhir.length; j++){
            if(arr[i].jurusan === hasilAkhir[j].jurusan){
                hasilAkhir[j].students.push(arr[i].nama)
                hasilAkhir[j].rataRataNilai += arr[i].nilai
                ketemu = true
            }
        }
        if(ketemu === false){
            let obj = {
                jurusan : arr[i].jurusan,
                rataRataNilai : arr[i].nilai,
                students : [arr[i].nama]
            }
            hasilAkhir.push(obj)
        }
    }
    // membuat rata-rata
    for (let i = 0; i < hasilAkhir.length; i++) {
        hasilAkhir[i].rataRataNilai = hasilAkhir[i].rataRataNilai / hasilAkhir[i].students.length
    }
    return hasilAkhir
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





