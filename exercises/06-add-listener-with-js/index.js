window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	
};

// The listener function here
let greenButton = document.getElementById("theGreen");
greenButton.addEventListener("click", myClickFunction);

function myClickFunction() {
	alert("woohoo!")
}

