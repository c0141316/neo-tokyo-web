var id1 = null;
var id2 = null;
var id3 = null;
var id4 = null;
var dropped = false;
var home = document.querySelector(".homenav");
var wit = document.getElementById("whatisthat");
var gal = document.getElementById("gallery");
var fig = document.getElementById("figure");
var con = document.getElementById("contact");
var sej = document.getElementById("artSejarah");
var contslid = document.getElementById("artGal");
var imgslid = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];
var navAct = document.querySelector(".NavAct");
var dayBut = document.getElementById("daybutton");
var nigBut = document.getElementById("nightbutton");
var warBut = document.getElementById("caution");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
let img1 = document.getElementById("img1");
let th31 = document.getElementById("th31");
let desc1 = document.getElementById("cd1");
let img2 = document.getElementById("img2");
let th32 = document.getElementById("th32");
let desc2 = document.getElementById("cd2");
let img3 = document.getElementById("img3");
let th33 = document.getElementById("th33");
let desc3 = document.getElementById("cd3");
let artAct = document.getElementById("artAct");
let artCon = document.getElementById("artCon");

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
		dropDown();
		dropped = true;
		clicked=false;
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

function refrButton() {
	if(dayAct) {
		dayBut.style.color = "Black";
		dayBut.style.backgroundColor = "White";
		nigBut.style.color = "white";
		nigBut.style.backgroundColor = "initial";
		warBut.style.color = "white";
		warBut.style.backgroundColor = "initial";
		card1.style.backgroundColor = "white";
		card1.style.color = "black";
		card1.style.boxShadow = "0px 0px 10px 0px white";
		card2.style.backgroundColor = "white";
		card2.style.color = "black";
		card2.style.boxShadow = "0px 0px 10px 0px white";
		card3.style.backgroundColor = "white";
		card3.style.color = "black";
		card3.style.boxShadow = "0px 0px 10px 0px white";
		img2.src = "res/samuraimuseum.jpg";
		th32.innerText = "Samurai Museum";
		cd2.innerText = "Pretty much the only family-friendly option for the area, the Samurai Museum has an impressive display of costumes, swords and all things samurai to enjoy, spanning 800 years of history. The museum is relatively small, but staff are knowledgeable and always willing to answer questions from visitors in English. They have demonstrations by trained actors and you can try on different costumes too. Guided tours are available and a good option, so you can have in-depth explanations to all the sections. Tickets are ¥1,800 for adults and ¥800 for children, so it’s a bit steep, but read more here and you may just find yourself convinced!"
		img1.src = "res/gojira.jpg";
		th31.innerText = "Godzilla Head";
		cd1.innerText = "The official local ambassador, the giant Godzilla is now a permanent feature and on occasion will light up and roar, which never ceases to be entertaining. He can be spotted from afar and makes a great meeting place (way cooler than Hachiko) as he sits right in the middle of Kabukicho. He is actually part of Gracery Hotel and you can book rooms with a view of his face, or take a tour up to the roof to see him close up! The Toho Cinema (same building as the hotel) is also a great place to see movies either dubbed or subtitled as they have a great selection—perfect for a rainy day.";
		img3.src = "res/hanazono.jpg";
		th33.innerText = "Hanazono Shrine";
		cd3.innerText = "Built in the Edo period by the Hanazono family, this is one of the most historical Shinto shrines in Japan, but easy to miss. Find the tiny gap in tall buildings and step through the red torii gate to find a mini escape from the busy streets. Meaning “flower garden”, Hanazono was once part of the Imperial Gardens and later had a garden growing vegetables and flowers. The shrine has plenty of festivals including the popular Bird Festival held in November and the two-horse festival in February, as well as celebrating traditional ones like Setsubun and the New Year ceremonies. Once you’re done, if you fancy a drink, you can head down the path to the left of the complex and it leads you straight to Golden Gai.";
	} else if(nigAct) {
		nigBut.style.color = "Black";
		nigBut.style.backgroundColor = "White";
		dayBut.style.color = "white";
		dayBut.style.backgroundColor = "initial";
		warBut.style.color = "white";
		warBut.style.backgroundColor = "initial";
		card1.style.backgroundColor = "Black";
		card1.style.color = "white";
		card1.style.boxShadow = "0px 0px 10px 0px black";
		card2.style.backgroundColor = "Black";
		card2.style.color = "white";
		card2.style.boxShadow = "0px 0px 10px 0px black";
		card3.style.backgroundColor = "Black";
		card3.style.color = "white";
		card3.style.boxShadow = "0px 0px 10px 0px black";
		img1.src = "res/pachinko.jpg";
		th31.innerText = "Pachinko";
		cd1.innerText = "As close as Japan gets to gambling (legally), pachinko is a very popular pastime with more parlors than you can shake a stick at in this dodgy district. Now, if you hope to understand this game, good luck. The screaming racket that emanates from these glowing halls every time a door opens is genuinely quite horrifying—but you can give it a go. Insert your money into the machine and wait for the happy crashing of tiny silver balls, then begin—you might win more, you might not. Who knows. It’s fun to try though, and obviously pretty addictive. Each tiny ball costs between ¥1–¥4 yen, so you can keep it cheap if you just want to try, but it can add up. Your aim is to make the balls land between the pegs, and the strength with which you turn the handle determines how strong they shoot out. Due to people spending insane amounts of money over long hours, security are quick to chuck you out over privacy fears, so head in with confidence and sit down straight away to show you aren’t just gawking. Avoid very empty parlors, as they probably have a reputation for low payouts. And if you’re serious, check the stats on the top of each machine to work out which has the best chance of paying out."
		img2.src = "res/robotrest.jpg";
		th32.innerText = "Robot Restaurant";
		cd2.innerText = "No doubt you will have heard of the in/famous Robot Restaurant, which is no restaurant but definitely has plenty of robots—usually ridden by girls in provocative outfits with very loud music. This pretty much encapsulates the area: it is an offence to your senses but a lot of fun, although it comes with a fairly hefty price tag. Tickets are ¥8,000 face value, but you can get them for under ¥5,800 by booking online. Designed specifically to fill this tourist desire for neon, modern and weird Japan—this is not the place for snobs. Take it for what it is, and enjoy it.";
		img3.src = "res/goldengai.jpg";
		th33.innerText = "Golden Gai";
		cd3.innerText = "One the most popular drinking spots in Kabukicho, the only fees you have to worry about here are the seating ones (which range from 0 to ¥1,000) so you can rest easy. There are around 300 places to choose from packed into these alleys, so you can enjoy the wandering as much as your drinks! The tiny bars usually only seat single digits, so big groups may have to split up. Some favorites include Albatross and Hair of the Dog, the latter of which is a rock bar with no seating charge that plays constant concert DVDs at request. The bars all have their own style and atmosphere, making a bar crawl a way more interesting prospect than your usual experience!";
	} else if(warAct) {
		warBut.style.color = "Black";
		warBut.style.backgroundColor = "White";
		nigBut.style.color = "white";
		nigBut.style.backgroundColor = "initial";
		dayBut.style.color = "white";
		dayBut.style.backgroundColor = "initial";
		card1.style.backgroundColor = "#ff1111";
		card1.style.color = "white";
		card1.style.boxShadow = "0px 0px 10px 0px black";
		card2.style.backgroundColor = "#ff1111";
		card2.style.color = "white";
		card2.style.boxShadow = "0px 0px 10px 0px black";
		card3.style.backgroundColor = "#ff1111";
		card3.style.color = "white";
		card3.style.boxShadow = "0px 0px 10px 0px black";
		img1.src = "res/yakuza.jpg";
		th31.innerText = "Yakuza";
		cd1.innerText = "They would likely to stroll at night so beware not to pick a fight with them"
		img2.src = "res/bottakuri.jpg";
		th32.innerText = "Bottakuri";
		cd2.innerText = "A scam so to be called bar rip-off. The hostess would say that drink is cheap but when you finish all of your drink they charge you surprisingly high";
		img3.src = "res/redlightdistrict.jpg";
		th33.innerText = "Red Light District";
		cd3.innerText = "Well, what do you expect from most famous red light district in Japan?";
	}
}

refrButton();

function changeNig() {
	nigAct = true;
	dayAct = false;
	warAct = false;
	refrButton();

}

function changeDay() {
	nigAct = false;
	dayAct = true;
	warAct = false;
	refrButton();
}

function changeWar() {
	nigAct = false;
	dayAct = false;
	warAct = true;
	refrButton();
}

function artactPopUp(){
	artAct.style.visibility = "visible";
	artAct.style.height = "70vh";
	artAct.style.opacity = "1";
	fig.style.marginTop = "80vh"
	gal.style.visibility = "hidden";
	wit.style.visibility = "hidden";
	con.style.visibility = "hidden";
	gal.style.opacity = "0";
	wit.style.opacity = "0";
	con.style.opacity = "0";
	home.style.visibility = "hidden";
	document.querySelector(".logo").style.bottom = "auto";
	document.querySelector(".logo").style.top = "2vh";
	document.querySelector(".title").style.fontSize = "200%"
	document.querySelector(".subtitle").style.fontSize = "50%"
}
function artactPopDown(){
	artAct.style.visibility = "hidden";
	artAct.style.height = "1vh";
	artAct.style.opacity = "0";
	fig.style.marginTop = "34vh"
	gal.style.visibility = "visible";
	wit.style.visibility = "visible";
	con.style.visibility = "visible";
	gal.style.opacity = "1";
	wit.style.opacity = "1";
	con.style.opacity = "1";
	home.style.visibility = "visible";
	document.querySelector(".logo").style.bottom = "2vh";
	document.querySelector(".logo").style.top = "auto";
	document.querySelector(".title").style.fontSize = "8vw"
	document.querySelector(".subtitle").style.fontSize = "2vw"
}
function artconPopUp() {
	artCon.style.opacity = "1";
	artCon.style.visibility = "visible";
	con.style.marginTop = "80vh";
	gal.style.visibility = "hidden";
	wit.style.visibility = "hidden";
	fig.style.visibility = "hidden";
	gal.style.opacity = "0";
	wit.style.opacity = "0";
	fig.style.opacity = "0";
	home.style.visibility = "hidden";
}

function artconPopDown() {
	artCon.style.opacity = "0";
	artCon.style.visibility = "hidden";
	con.style.marginTop = "42vh";
	gal.style.visibility = "visible";
	wit.style.visibility = "visible";
	fig.style.visibility = "visible";
	gal.style.opacity = "1";
	wit.style.opacity = "1";
	fig.style.opacity = "1";
	home.style.visibility = "visible";
}