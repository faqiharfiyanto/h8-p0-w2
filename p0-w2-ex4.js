var tanggal = 31
var bulan = 12
var tahun = 2000
var strTanggal = String(tanggal)
var strTahun = String(tahun)
if(tanggal < 1 || tanggal > 31) {
    console.log('Input tanggal tidak sesuai!')
} else {
    if(tahun < 1900 || tahun > 2200) {
        console.log('Input tahun tidak sesuai!')
    }
    else {
        switch(bulan) {
            case 1: {console.log(strTanggal + ' ' + 'Januari' + ' ' + strTahun); break;}
            case 2: {console.log(strTanggal + ' ' + 'Februari' + ' ' + strTahun); break;}
            case 3: {console.log(strTanggal + ' ' + 'Maret' + ' ' + strTahun); break;}
            case 4: {console.log(strTanggal + ' ' + 'April' + ' ' + strTahun); break;}
            case 5: {console.log(strTanggal + ' ' + 'Mei' + ' ' + strTahun); break;}
            case 6: {console.log(strTanggal + ' ' + 'Juni' + ' ' + strTahun); break;}
            case 7: {console.log(strTanggal + ' ' + 'Juli' + ' ' + strTahun); break;}
            case 8: {console.log(strTanggal + ' ' + 'Agustus' + ' ' + strTahun); break;}
            case 9: {console.log(strTanggal + ' ' + 'September' + ' ' + strTahun); break;}
            case 10: {console.log(strTanggal + ' ' + 'Oktober' + ' ' + strTahun); break;}
            case 11: {console.log(strTanggal + ' ' + 'November' + ' ' + strTahun); break;}
            case 12: {console.log(strTanggal + ' ' + 'Desember' + ' ' + strTahun); break;}
            default: {console.log('Input bulan tidak sesuai!');}
        }
    }
}