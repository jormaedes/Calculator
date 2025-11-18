const display = document.querySelector("#display");
const numbers = [...document.querySelectorAll(".number")];

numbers.forEach(element=>{
	element.addEventListener('click', ()=>{
		if(display.textContent == '0')
			display.textContent = element.textContent;
		else
			display.textContent += element.textContent;
	});
});

function add(a, b) {
	return (a + b);
}

function subtract(a, b) {
	return (a - b);
}

function multiply(a, b) {
	return (a * b);
}

function divide(a, b) {
	if (b == 0)
		return ("Impossible to divide by zero");
	return (a / b);
}

function percentage(a) {
	return (divide(a, 100));
}
