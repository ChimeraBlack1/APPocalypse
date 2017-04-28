var timesPressed = 0;


var Button = function () {
	
	timesPressed = timesPressed += 1;
	
	if (timesPressed > 2) {
		setTimeout(myTimeout4, 10)
		setTimeout(mytimeout3, 2000)	
		timesPressed = 0;
		return
	}
	
 	setTimeout(myTimeout2, 10) 
    setTimeout(myTimeout3, 2000) 
    setTimeout(myTimeout1, 4000) 
}

function myTimeout1() {
    document.getElementById("button").innerHTML = "Refresh";
}
function myTimeout2() {
    document.getElementById("button").innerHTML = "Checking...";
}
function myTimeout3() {
    document.getElementById("button").innerHTML = "...Still Good.";
}



// if the user has pressed the button 3 times the button becomes a little more cheeky
function myTimeout4() {
	$("#button").css("width", "260px");
	document.getElementById("button").innerHTML = "Relax! We will let you know!";
}

