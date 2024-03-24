window.onload = function loadFn() {
	let containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		// Your code here
		/*evento: en este caso hace referencia al click
		target: hace referencia a dónde ocurrió el evento. En este caso,
		en el id de "container, que es el div que recoge todo el body"
		id: aquí deberemos poner lo que queremos que se muestre
		Saltará la alerta
		(hacemos click. en cualquier parte del body.se mostrará el id de container)
		*/
		alert("event.target.id");
	});
};
