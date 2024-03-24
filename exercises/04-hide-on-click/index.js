window.myEventListener = function myEventListener() {
	// Your code here
	//Para esconder el 1º elemento primero vamos a colocarnos en él
	let primerElemento = document.getElementById("firstDiv");
	//Para eliminar un elemento tienes que hacerlo como style, display, none
	primerElemento.style.display = "none";
}
