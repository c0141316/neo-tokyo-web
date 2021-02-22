var id1 = null;
var id2 = null;
var id3 = null;
var id4 = null;
var dropped = false;
var wit = document.getElementById("whatisthat");
var gal = document.getElementById("gallery");
var fig = document.getElementById("figure");
var con = document.getElementById("contact");

function dropDown() {
if(!dropped) {
	wit.style.marginTop = "18vh";
	gal.style.marginTop = "26vh";
	fig.style.marginTop = "34vh";
	con.style.marginTop = "42vh";
	wit.style.opacity = 1;
	gal.style.opacity = 1;
	fig.style.opacity = 1;
	con.style.opacity = 1;
}
}
function dropUp() {
if (!dropped) {
	wit.style.marginTop = "10vh";
	gal.style.marginTop = "10vh";
	fig.style.marginTop = "10vh";
	con.style.marginTop = "10vh";
	wit.style.opacity = 0;
	gal.style.opacity = 0;
	fig.style.opacity = 0;
	con.style.opacity = 0;
}
}

function showNav(){
	if (!dropped){
		dropped = true;
		dropDown();
	} else {
		dropped = false;
		dropUp();
	}
}