function dataHandling2(data) {
    var a = data.splice(4,1,'Pria', 'SMA Internasional Metro')
    var b = data.splice(1,2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
    var ttl = data[3].split('/')
    var ttl1 = ttl.join('-')

    var bulan =''
    switch (ttl[1]) {
        case '01':
            bulan = 'Januari'
            break;
        case '02':
            bulan = 'Februari'
            break;
        case '03':
            bulan = 'Maret'
            break;
        case '04':
            bulan = 'April'
            break;
        case '05':
            bulan = 'Mei'
            break;
        case '06':
            bulan = 'Juni'
            break;
        case '07':
            bulan = 'Juli'
            break;
        case '08':
            bulan = 'Agustus'
            break;
        case '09':
            bulan = 'September'
            break;
        case '10':
            bulan = 'Oktober'
            break;
        case '11':
            bulan = 'November'
            break;
        case '12':
            bulan = 'Desember'
            break;
        default:
            bulan = 'Tidak ada Bulan lagi'
            break;
    }
    console.log(data);
    console.log(bulan);
    console.log(ttl.sort((a,b) => b-a));
    console.log(ttl1);
    console.log(data[1].slice(0,15));
    }
    
    var data = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']
    dataHandling2(data)