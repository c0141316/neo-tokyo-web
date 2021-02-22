var id1 = null;
var id2 = null;
var id3 = null;
var id4 = null;
var dropped = false;
var home = document.querySelector(".homenav")
var wit = document.getElementById("whatisthat");
var gal = document.getElementById("gallery");
var fig = document.getElementById("figure");
var con = document.getElementById("contact");
var sej = document.getElementById("artSejarah");
var contslid = document.getElementById("artGal");
var imgslid = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];

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

function artSejPopUp(){
	sej.style.visibility = "visible";
	sej.style.marginTop = "0";
	sej.style.opacity = "1";
	wit.style.marginTop = "80vh"
	wit.style.borderColor = "black";
	wit.style.color = "black";
	document.getElementById("japmen").style.color = "black";
	document.getElementById("engmen").style.color = "black";
	gal.style.visibility = "hidden";
	fig.style.visibility = "hidden";
	con.style.visibility = "hidden";
	gal.style.opacity = "0";
	fig.style.opacity = "0";
	con.style.opacity = "0";
	home.style.visibility = "hidden";
	document.querySelector(".logo").style.bottom = "auto";
	document.querySelector(".logo").style.top = "2vh";
	document.querySelector(".title").style.fontSize = "200%"
	document.querySelector(".subtitle").style.fontSize = "50%"
}

function artSejPopDown(){
	sej.style.visibility = "hidden";
	sej.style.marginTop = "0";
	sej.style.opacity = "0";
	wit.style.marginTop = "18vh"
	wit.style.borderColor = "white";
	wit.style.color = "white";
	document.getElementById("japmen").style.color = "white";
	document.getElementById("engmen").style.color = "white";
	gal.style.visibility = "visible";
	fig.style.visibility = "visible";
	con.style.visibility = "visible";
	gal.style.opacity = "1";
	fig.style.opacity = "1";
	con.style.opacity = "1";
	home.style.visibility = "visible";
	document.querySelector(".logo").style.bottom = "2vh";
	document.querySelector(".logo").style.top = "auto";
	document.querySelector(".title").style.fontSize = "8vw"
	document.querySelector(".subtitle").style.fontSize = "2vw"
}

function refrSlid() {
	var i = Math.abs(curslid % 4);
	contslid.style.backgroundImage = "url(res/slider/" + imgslid[i] + ")";
}

refrSlid();

function galPopUp() {
	contslid.style.visibility = "visible";
	contslid.style.height = "80vh";
	contslid.style.opacity = "1";
	gal.style.marginTop = "10vh"
	wit.style.visibility = "hidden";
	fig.style.visibility = "hidden";
	con.style.visibility = "hidden";
	wit.style.opacity = "0";
	fig.style.opacity = "0";
	con.style.opacity = "0";
	home.style.visibility = "hidden";
}

function galPopDown() {
	contslid.style.visibility = "hidden";
	contslid.style.height = "1vh";
	contslid.style.opacity = "0";
	gal.style.marginTop = "26vh"
	wit.style.visibility = "visible";
	fig.style.visibility = "visible";
	con.style.visibility = "visible";
	wit.style.opacity = "1";
	fig.style.opacity = "1";
	con.style.opacity = "1";
	home.style.visibility = "visible";
}