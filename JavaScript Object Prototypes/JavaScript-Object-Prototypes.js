//======================================================================
// JavaScript Object Prototypes
//======================================================================

//======================================================================
// Menambahkan Properti ke function tanpa menggunakan Variable
//======================================================================
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// // Menambahkan Property Langsung Ke Function
// // jadi property bisa digunakan oleh lebih dari satu variable
// Person.prototype.nationality = "English";

// var myFather = new Person("John", "Doe", 50, "blue");

// // menambahkan Property Menggunakan Variable
// // Hanya Bisa digunakan Oleh 1 variabel Saya
// // in the case, hanya bisa digunakan Variable "myfather" saja
// // myFather.nationality = "English";

// document.getElementById("hd").innerHTML ="My father is " + myFather.nationality; 

//======================================================================
// Menambahkan Method ke function tanpa menggunakan Variable
//======================================================================
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName
// };
// // Coba Buat method untuk ganti nama
// Person.prototype.gantiNama = function(gNama){
// 	return this.firstName = gNama;
// }

// var myFather = new Person("John", "Doe", 50, "blue");

// // Hanya Coba Ganti Nama
// myFather.gantiNama("Tika");

// document.getElementById("hd").innerHTML = "My father is " + myFather.name(); 
//======================================================================
