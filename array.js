let mhs = ['Raihan', 'Sabil', 'Ukhasyah'];
mhs.push('Ridwan'); //menambahkan data di akhir array
mhs.pop(); //menghapus data di akhir array
mhs.unshift('yusuf'); //menambahkan data di awal array
mhs.splice(3, 0,  'sulthon'); //menambahkan data di index ke-3
mhs.splice(1, 2); //menghapus data di index ke-2

let totalMhs = mhs.length; //menghitung jumlah data array
console.log(mhs); 