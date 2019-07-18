var css =document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementsByTagName("body")[0];
//body.style.background="green";

function gradient_background(){
	//console.log(event.target.value);
	console.log(color1.value);
	body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent=body.style.background;
	//body.style.background="linear-gradient(to right, "+event.target.value+","+color2.value+");"
}
color1.addEventListener("input",gradient_background);
color2.addEventListener("input",gradient_background);