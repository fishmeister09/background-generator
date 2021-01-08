var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var text = document.getElementById('myText');
var click = document.getElementById('click');


function input(){
	text.value = (`${color1.value}  ${color2.value}`);
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
input()}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


click.addEventListener("click", function() {
	text.select();
	document.execCommand("copy");
	alert("Copied the text: " + text.value);

});



