var data =[['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
        ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
        ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
        ['0004', 'Bintang Sanjaya', 'Martapura', '06/04/1970', 'Berkebun']];

function dataHandling(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(`***********************************`);
        console.log (`Nomor ID       : ${data[i][0]}`);
        console.log(`Nama Lengkap   : ${data[i][1]}`);
        console.log(`TTL            : ${data[i][2]}`);
        console.log(`Hobi           : ${data[i][3]}`);
        console.log(`***********************************`);
        console.log();
    }
}
dataHandling (data);