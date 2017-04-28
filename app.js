
var Button = function () {
 	setTimeout(myTimeout1, 10) 
    setTimeout(myTimeout2, 2000) 
    setTimeout(myTimeout3, 4000) 
}

function myTimeout1() {
    document.getElementById("button").innerHTML = "Checking..";
}
function myTimeout2() {
    document.getElementById("button").innerHTML = "...Still Good.";
}
function myTimeout3() {
    document.getElementById("button").innerHTML = "Refresh";
}