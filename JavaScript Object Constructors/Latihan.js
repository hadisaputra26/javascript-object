function namaLengkap(namaDepan, namaBelakang){
	this.nama1 = namaDepan;
	this.nama2 = namaBelakang;
	this.gantiNama = function(gNama){
		return this.nama1 = gNama;
	}
}

var namaSaya = new namaLengkap("Hadi","Saputra");

namaSaya.fullName = function(){
	return this.nama1+ " " + this.nama2;
}

namaSaya.gantiNama("Tika");

document.getElementById("hd").innerHTML = namaSaya.nama1+ " " +namaSaya.nama2;
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