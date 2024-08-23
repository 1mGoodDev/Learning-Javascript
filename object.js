let pc = {
	proc: 'intel',
	ram: ['4gb', '8gb', '16gb'],
	slotRam: 4,
	motherBoard: {
		chip: 'H310',
		socket: 'LGA1151',
	}
}

// function validateName(value) {
//     if (typeof value == 'string'){
//         //kode yang dieksekusi jika value benar bertipe string
//     }
// }

// console.log(validateName('value')); // Output: undefined

var a = true;
var b = false;
var c = false;
var d = true;

console.log(a || b && !c && !d)