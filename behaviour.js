var id1 = null;
var id2 = null;
var id3 = null;
var id4 = null;
function dropDown() {
	let wit = document.getElementById("whatisthat");
	let gal = document.getElementById("gallery");
	let fig = document.getElementById("figure");
	let con = document.getElementById("contact");
	let mrgntop1 = 10;
	let mrgntop2 = 10;
	let mrgntop3 = 10;
	let mrgntop4 = 10;
	let opcty = 0;
	clearInterval(id1);
	clearInterval(id2);
	clearInterval(id3);
	clearInterval(id4);
	id1 = setInterval(frame1, 30);
	function frame1() {
		if (mrgntop1 == 18) {
		  clearInterval(id1);
		} else {
		  mrgntop1++; 
		  wit.style.marginTop = mrgntop1 + "vh";  
		}
		if(opcty == 1) {
			clearInterval(id1);
		} else {
			opcty += 0.1;
			wit.style.opacity = opcty;
			gal.style.opacity = opcty;
			fig.style.opacity = opcty;
			con.style.opacity = opcty;
		}
	}
	id2 = setInterval(frame2, 30);
	function frame2() {
		if (mrgntop2 == 26) {
			clearInterval(id2);
		  } else {
			mrgntop2++; 
			gal.style.marginTop = mrgntop2 + "vh";  
		  }
	}
	id3 = setInterval(frame3, 30);
	function frame3() {
		if (mrgntop3 == 34) {
			clearInterval(id3);
		  } else {
			mrgntop3++; 
			fig.style.marginTop = mrgntop3 + "vh";  
		}
	}
	id4 = setInterval(frame4, 30);
	function frame4() {
		if (mrgntop4 == 42) {
			clearInterval(id3);
		  } else {
			mrgntop4++; 
			con.style.marginTop = mrgntop4 + "vh";  
		}
	}
}
function dropUp() {
	let wit = document.getElementById("whatisthat");
	let gal = document.getElementById("gallery");
	let fig = document.getElementById("figure");
	let con = document.getElementById("contact");
	let mrgntop1 = 18;
	let mrgntop2 = 26;
	let mrgntop3 = 34;
	let mrgntop4 = 42;
	let opcty = 8;
	clearInterval(id1);
	clearInterval(id2);
	clearInterval(id3);
	clearInterval(id4);
	id1 = setInterval(frame1, 30);
	function frame1() {
		if (mrgntop1 == 10) {
		  clearInterval(id1);
		} else {
		  mrgntop1--; 
		  wit.style.marginTop = mrgntop1 + "vh";  
		}
	}
	id2 = setInterval(frame2, 30);
	function frame2() {
		if (mrgntop2 == 10) {
			clearInterval(id2);
		  } else {
			mrgntop2--; 
			gal.style.marginTop = mrgntop2 + "vh";  
		  }
	}
	id3 = setInterval(frame3, 30);
	function frame3() {
		if (mrgntop3 == 10) {
			clearInterval(id3);
		  } else {
			mrgntop3--; 
			fig.style.marginTop = mrgntop3 + "vh";  
		}
	}
	id4 = setInterval(frame4, 30);
	function frame4() {
		if (mrgntop4 == 10) {
			clearInterval(id3);
		  } else {
			mrgntop4--; 
			con.style.marginTop = mrgntop4 + "vh";  
		}
		if(opcty == 0) {
			clearInterval(id4);
		} else {
			opcty--;
			wit.style.opacity = opcty/8;
			gal.style.opacity = opcty/8;
			fig.style.opacity = opcty/8;
			con.style.opacity = opcty/8;
		}
	}
}