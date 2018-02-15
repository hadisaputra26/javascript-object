//===============================================================
// Menggunakan Variable
//===============================================================
// var nama = "HADI SAPUTRA";
// function kali(a,b){
// 	return a*b;
// }
// var hasil = kali(2,9);
// document.getElementById("hd").innerHTML= nama;
// document.getElementById("hds").innerHTML = hasil;

//===============================================================
// Menggunakan Variable Object
//===============================================================
// var person = {
// 	nama : "hadi",
// 	umur : 20,
// 	status : "mahasiswa",
// };

// document.getElementById("hd").innerHTML = "Hadi Saputra";
// document.getElementById("hd").innerHTML = person.namaPenuh;

//===============================================================
// Menggunakan FOR / loop
//===============================================================
// var txt = "";
// var person = {fname:"Hadi", lname:"Saputra", age:30, status:"Mahasiswa"}; 
// var x;

// for(x in person){
// 	txt += person[x] + " ";
// }
// document.getElementById("hd").innerHTML = txt;

//================================================================
// Menambah Properti Baru Dengan Variable Object Yang sama
//================================================================
// var person = {
//     firstname:"Hadi",
//     lastname:"Saputra",
//     age:20,
//     eyecolor:"blue"
// };
// // Property baru Person
// person.nationality = "Indonesia";

// document.getElementById("hd").innerHTML =
// person.firstname + " Dari " + person.nationality + ".";

//================================================================
// Menghapus Properti Dari Sebuah Variable Object
//================================================================
// var person = {
//     firstname:"Hadi",
//     lastname:"Saputra",
//     age:20,
//     eyecolor:"Hitam"
// };

// delete person.age;
// document.getElementById("hd").innerHTML =
// person.firstname + " is " + person.age + " years old.";

//================================================================
// Menggunakan function didalam Object
//================================================================
// contoh 1
// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//        return this.firstName + " " + this.lastName;
//     }
// };

// document.getElementById("hd").innerHTML = person.fullName();

// Contoh 2
// var orang = {
// 	nama1 : "hadi",
// 	nama2 : "saputra",
// 	nama3 : "indonesia",
// 	namapenuh : function(){
// 		return this.nama1 + " " + this.nama2 + " " + this.nama3;
// 	}
// };
// document.getElementById("hd").innerHTML = orang.namapenuh();

//================================================================
// Menambahkan method baru kedalam variable object
//================================================================
// var person = {
//     namaPertama: "Hadi",
//     namaKedua : "Saputra",
//     id       : 5566,
// };
// person.name = function() {
//     return this.namaPertama + " " + this.namaKedua;
// };

// document.getElementById("hd").innerHTML =
// "My Name is " + person.name(); 
//================================================================