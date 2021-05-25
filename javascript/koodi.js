
window.addEventListener("load", ladattuna, );

document.addEventListener("DOMContentLoaded", kuvat);
	

var Otsikkohiirella = "Sivu vaan kehittyy"
var Otsikkoilmanhiirta = "Kes&aumlPekka"
var Leipahiirella = "Muutoksen tuulet puhaltaa"
var Leipailmanhiirta = "Hello world!"
var Leipa = document.getElementById("leipa")
var Otsikko = document.getElementById("otsikko")


function kuvat() {
	console.log("Hello");
	var IC = document.createElement("img");
  	IC.src = "https://i.ytimg.com/vi/hU_dcC3pvcU/maxresdefault.jpg";
	var src = document.getElementById("ic");
	src.appendChild(IC);
	}
	
function ladattuna() {

	Leipa.addEventListener("mouseover",hiiriYli);
	Leipa.addEventListener("mouseout", hiiriOhi);
	Otsikko.addEventListener("mouseover",hiiriYli);
	Otsikko.addEventListener("mouseout", hiiriOhi);


}
function hiiriYli() {
	Leipa.innerHTML = Otsikkohiirella
	Otsikko.innerHTML = Leipahiirella
}
function hiiriOhi(){
	Leipa.innerHTML = Leipailmanhiirta
	Otsikko.innerHTML = Otsikkoilmanhiirta
}


