window.addEventListener("load", ladattuna)

var Otsikkohiirella = "Sivu vaan kehittyy"
var Otsikkoilmanhiirta = "Kes&aumlPekka"
var Leipahiirella = "Muutoksen tuulet puhaltaa"
var Leipailmanhiirta = "Hello world!"
var Leipa = document.getElementById("leipa")
var Otsikko = document.getElementById("otsikko")
	
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


