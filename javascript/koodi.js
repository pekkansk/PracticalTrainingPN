
window.addEventListener("load", ladattuna, );

document.addEventListener("DOMContentLoaded", kuvat);
	

var Otsikkohiirella = "Sivu vaan kehittyy"
var Otsikkoilmanhiirta = "Kes&aumlPekka"
var Leipahiirella = "Muutoksen tuulet puhaltaa"
var Leipailmanhiirta = "Hello world!"
var Leipa = document.getElementById("leipa")
var Otsikko = document.getElementById("otsikko")
var taulukonleveys = 3
var taulukonkorkeus = 2
var taulukonkoko = taulukonleveys * taulukonkorkeus


function kuvat() {
	console.log("Hello");
	var IC = document.createElement("img");
  	IC.src = "https://i.ytimg.com/vi/hU_dcC3pvcU/maxresdefault.jpg";
	var src = document.getElementById("ic");
	src.appendChild(IC);

	var poyta = document.createElement('table'),
    	tr = document.createElement('tr'),
    	cells, i;
 	for (i = 0; i < taulukonleveys; i++) { 
    	tr.appendChild(document.createElement('td'));
	}
	for (i = 0; i < taulukonkorkeus; i++) { 
    	poyta.appendChild(tr.cloneNode(true));
	}
	cells = poyta.getElementsByTagName('td'); // get all of the cells
	for (i = 0; i < taulukonkoko; i++) {               // number them
    	cells[1].innerHTML = "<img src=\'https://i.ytimg.com/vi/JC6KKLz8qHE/hqdefault.jpg'>";
		cells[2].innerHTML = "<img src=\'https://i.ytimg.com/vi/hU_dcC3pvcU/maxresdefault.jpg'>";
	}
	document.getElementById('container').appendChild(poyta);
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


