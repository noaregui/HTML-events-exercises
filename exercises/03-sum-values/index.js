// Adding the function to the window makes it globally available
window.calculateSumListener = function() {
	// Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	// Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;
	// Your code here
	/*Para conseguir el valor del 3º input(suma) tendremos que sumar los 2 valores.
	Siempre que hay un input automáticamente coge los números como string. Por eso,
	para poder hacer ecuaciones tendremos que pasarlo primero a números, para eso parseInt*/
	let suma = parseInt(stringA) + parseInt(stringB);
	let resultado = document.getElementById("resultNumber");
	resultado.value = suma;
};
