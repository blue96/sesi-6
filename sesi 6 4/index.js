let konfirmasi = true
let klik = -1;
while(konfirmasi===true){
    klik += 1;
    konfirmasi = confirm('Apakah anda mau mengulang?')
}
document.write('perulangan sudah dilakukan sebanyak ' + klik + ' kali')