let mhs = {
	name: 'Fulan',
	age: 20,
	major: 'TRPL',
	skills: ['Sys Admin', 'OOP', 'Design'],
	poor: true, //miskin
}

// console.log('Mahasiswa boleh daftar :' + (mhs.age > 17));

// if (mhs.major == 'TRMG') {
// 	console.log(mhs.name + 'Jurusan TRMG');
// } else if (mhs.major == 'TRPL') {
// 	console.log(mhs.name + 'Jurusan TRKJ');
// } else if (mhs.major == 'TRPL') {
// 	console.log(mhs.name + ' Jurusan TRPL');
// } else {
// 	console.log(mhs.name + ' Jurusan' +  mhs.major);
// }

// ternary operator
// mhs.major == 'TRMG' ? console.log(mhs.name + ' Jurusan TRMG') : console.log(mhs.name + ' Jurusan ' + mhs.major);

// switch case
//  switch (mhs.major) {
// 	case 'TRMG':
//  		console.log(mhs.name + ' Jurusan TRMG');
//  		break;
//  	case 'TRPL':
//  		console.log(mhs.name + ' Jurusan TRPL');
//  		break;
//  	case 'TRKJ':
//  		console.log(mhs.name + ' Jurusan TRKJ');
//  		break;
//  	default:
//  		console.log(mhs.name + ' Jurusan ' + mhs.major);		
// }

// conditional function
// kriteria : umur < 21, miskin, skill lebih dari 2

function cekKelulusan(peserta) {
	let age = peserta.age;
	let poor = peserta.poor;
	let skills = peserta.skills;
	console.log(peserta)

	if (age <= 21 && poor == true && skills.length > 2) {
		console.log(peserta.name + ' Peserta lulus');
	} else if (age > 21 || poor == true) {  
		console.log(peserta.name + ' Peserta hampir lulus');
	} else {
		console.log(peserta.name + ' Peserta tidak lulus');
	}

	
}

cekKelulusan(mhs);