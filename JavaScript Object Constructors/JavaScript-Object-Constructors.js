//======================================================================
// Constructors Object
//======================================================================
// Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// // Create a Person object
// var saya = new Person("Hadi", "Saputra", 50, "Hitam");

// // Display age
// // document.getElementById("hd").innerHTML = "Umur Saya Adalah " + saya.age + "."; 

//======================================================================
// Menambahkan Sebuah Property Baru Kedalam Sebuah Object
//======================================================================

// Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// // Create 2 Person objects
// var myFather = new Person("John", "Doe", 50, "blue");
// var myMother = new Person("Sally", "Rally", 48, "green");

// // Add nationality to first object
// myFather.nationality = "English";
// myMother.negara = "Indonesia";

// Diplay nationality 
// document.getElementById("hd").innerHTML ="My father is " + myFather.nationality; 
// document.getElementById("hd").innerHTML ="Ibu Saya Berasal Dari " + myMother.negara ;

//======================================================================
// Menambahkan Sebuah Function Baru Kedalam Sebuah Object
//======================================================================

// Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// 			// Contoh Jika Function Di Dalam Object
// 			//     this.name = function() {
// 			//     return this.firstName + " " + this.lastName;
// 			// };
// }

// // Create 2 Person objects
// var myFather = new Person("Hadi", "Saputra", 50, "blue");
// var myMother = new Person("Sally", "Rally", 48, "green");

// // Add a name method to first object
// myFather.name = function() {
//     return this.firstName + " " + this.lastName;
// };

// // Display full name
// document.getElementById("hd").innerHTML =
// "My father is " + myFather.name(); 

// Contoh 2

// function namaLengkap(namaDepan, namaBelakang){
// 	this.nama1 = namaDepan;
// 	this.nama2 = namaBelakang;
// }

// var namaSaya = new namaLengkap("Hadi","Saputra");

// namaSaya.fullName = function(){
// 	return this.nama1+ " " + this.nama2;
// }

// // document.getElementById("hd").innerHTML = namaSaya.nama1+ " " +namaSaya.nama2;
// document.getElementById("hd").innerHTML = "Nama Saya Adalah : " + namaSaya.fullName();

//======================================================================
// Mengubah Nilai dari Sebuah Property
//======================================================================
// Constructor function for Person objects
// function Person(firstName,lastName,age,eyeColor) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.eyeColor = eyeColor;
//     this.changeName = function (name) {
//         this.lastName = name;
//     }
// }
// // Create a Person object
// var myMother = new Person("Sally","Rally",48,"green");

// // Change last name
// myMother.changeName("Hadi");

// // Diplay last name
// document.getElementById("hd").innerHTML =
// "My mother's last name is " + myMother.lastName;
//======================================================================
