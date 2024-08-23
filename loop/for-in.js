// loop using for in
var data = ['ba', 'ca', 'da'];
var message;
for (var lala in data) {

    message = 'indeks ' + lala + ' berisi data ' + data[lala];
    console.log(message);
};

//loop using for in (object)
var person = {
    'name': 'boss',
    'age': 40,
    'sex': 'male'
}

var message;

for (var attr in person) {

    message = 'atribut ' + attr + ' berisi data ' + person[attr];
    console.log(message);//output: atribut name berisi data boss, atribut age berisi
}

