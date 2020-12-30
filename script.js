var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var text = document.getElementById("input");
var submit= document.getElementById("submit");

function input(){
	console.log(text.value)
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	
}

submit.addEventListener("click", input);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);




