const display = document.querySelector("#display");
const numbers = [...document.querySelectorAll(".number")];
const clean = document.querySelector("#clean");
const btnDelete = document.querySelector("#delete");
const point = document.querySelector("#point");
const operators = [...document.querySelectorAll('.operator')];
let signal = "";
let stash = 0;

point.addEventListener('click', ()=>{
	if (display.textContent.includes('.'))
		return ;
	display.textContent += '.';
});

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

numbers.map(el=>{
	el.addEventListener('click', ()=>{
		if(display.textContent == '0')
			display.textContent = el.textContent;
		else
			display.textContent += el.textContent;
	});
});

operators.map(el =>{
	el.addEventListener("click", ()=>{
		stash = display.textContent;
		signal = el.textContent;
		console.log(signal, stash);
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


