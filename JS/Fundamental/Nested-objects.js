function nestedObjects() {
  var mahasiswa = {
    nama: "RIGA",
    ipk: {
      semester1: 3.25,
      semester2: 3.5,
      semester3: 3.75,
      semester4: 4,
    },
  };
  console.log(mahasiswa.ipk.semester4)
}

nestedObjects()