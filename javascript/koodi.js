
window.addEventListener("load", ladattuna, );

document.addEventListener("DOMContentLoaded", kuvat);

//Kuvataulukko
var taulukonkuvat = ["https://i.ytimg.com/vi/hU_dcC3pvcU/maxresdefault.jpg",
"https://i.ytimg.com/vi/JC6KKLz8qHE/hqdefault.jpg",
"https://cdn.nettimoto.com/live/2020/07/25/11debd15c7693cbd-large.jpg",
"https://cdn.nettimoto.com/live/2020/09/01/4a9f2e811f5a0568-large.jpg"
];
var len_kuvat = taulukonkuvat.length

for(i = 0; i < len_kuvat; i++) {
	var taulukonsisältö = "<img src=" + taulukonkuvat[2] + ">"
}

// Otsikon ja leipätekstin sisältö

var Otsikkohiirella = "Sivu vaan kehittyy"
var Otsikkoilmanhiirta = "Kes&aumlPekka"
var Leipahiirella = "Muutoksen tuulet puhaltaa"
var Leipailmanhiirta = "Hello world!"

var Leipa = document.getElementById("leipa")
var Otsikko = document.getElementById("otsikko")

//Taulukon muuttaminen
var taulukonleveys = 3
var taulukonkorkeus = 2
var taulukonkoko = taulukonleveys * taulukonkorkeus


function kuvat() {
	console.log("Hello");
	console.log(taulukonsisältö);
	console.log(len_kuvat);
	var IC = document.createElement("img");
  	IC.src = "https://i.ytimg.com/vi/hU_dcC3pvcU/maxresdefault.jpg";
	var src = document.getElementById("ic");
	src.appendChild(IC);

	var poyta = document.createElement('table'),
    	tr = document.createElement('tr'),
		img = document.createElement('IMG'),
    	cells, i;

	img.src = taulukonkuvat;

 	for (i = 0; i < taulukonleveys; i++) { 
    	tr.appendChild(document.createElement('td'));
	}
	for (i = 0; i < taulukonkorkeus; i++) { 
    	poyta.appendChild(tr.cloneNode(true));
	}
	cells = poyta.getElementsByTagName('td'); 
	for (i = 0; i < taulukonkoko; i++) {               // numeroidaan solut
		if(i < len_kuvat) {
			cells[i].innerHTML =  document.body.appendChild(img)
		}
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


