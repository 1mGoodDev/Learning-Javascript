var a = [];
var b = [];

for (var i = 0; i < 10; i++) {
    a.push(i);
}

console.log(a);
console.log('panjang a = ' + a.length + " elemen");

//gandakan nilai a dan simpan hasilnya dalam array b var b = [];
for (var j = 0; j < a.length; j++) {
    b.push(a[j] * 2);
}

console.log(b);
console.log('panjang b = ' + b.length + " elemen");

var c;

//sintaks alternatif, lebih efisien karena panjang array a //disimpan dalam variabel len

for (var k = 0, len = a.length; k < len; k++) {
    if (a[k] = 5) {
        c = a[k];

        //data ditemukan, hentikan loop dan keluar dari loop break;
    }
}

//perhatikan nilai k terakhir tidak sama dengan //panjang array a
console.log('data: ' + c + ' ditemukan di indeks ' + k);

var arr = [1, 2, 3, 4];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
