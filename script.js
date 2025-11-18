const display = document.querySelector("#display");
const numbers = [...document.querySelectorAll(".number")];
const clean = document.querySelector("#clean");
const btnDelete = document.querySelector("#delete");

btnDelete.addEventListener('click', ()=>{
	if (display.textContent == '0')
		return ;
	if (display.textContent.length === 1)
		display.textContent = '0';
	else{
		const arr = display.textContent.split('');
		arr.pop();
		display.textContent = arr.join("");
	}
});

clean.addEventListener('click', ()=>{
	display.textContent = '0';
});

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
