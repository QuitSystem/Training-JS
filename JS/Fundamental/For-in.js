function callObjects() {
    var mahasiswa = {
        nama : "RIGA",
        umur : 19,
        jurusan : "Hacking",
        semester : 7,
    }
    for(var x in mahasiswa){
        console.log(mahasiswa[x])
    }
}

callObjects()