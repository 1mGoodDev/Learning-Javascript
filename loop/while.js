//loop using while
var a = [];
var i = 0;

//selama i kurang dari 4
//break condition : i == 4

while (i < 4) {
	//simpan i dalam array 
	a.push(i);

	i++;

	//naikkan i untuk proses selanjutnya

};

console.log(a); //output: [0, 1, 2, 3]

//another way to write while loop
var a = [];
var i = 0;

while (i++ < 4) {
	a.push(i);
}

console.log(a); //output: [1, 2, 3, 4]

//trial
var a = [];
var i = 0;

while (++i < 4) {
    a.push(i);
};

console.log(a); //1,2,3