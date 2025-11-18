const display = document.querySelector("#display");
const numbers = [...document.querySelectorAll(".number")];
const clean = document.querySelector("#clean");
const btnDelete = document.querySelector("#delete");
const point = document.querySelector("#point");
const operators = [...document.querySelectorAll('.operator')];
const percent = document.querySelector("#percentage");
const equal = document.querySelector("#equal");
const expression = document.querySelector("#expression");

let signal = "";
let stash = 0;
let control = 0;

percent.addEventListener('click', ()=>{
	let value;
	if (display.textContent[display.textContent.length - 1] == '.')
		return ;
	if (display.textContent.includes('.'))
		value = parseFloat(display.textContent);
	else
		value = parseInt(display.textContent);
	display.textContent = percentage(value).toString();
});


point.addEventListener('click', ()=>{
	if (display.textContent.includes('.'))
		return ;
	display.textContent += '.';
	control = 1;
});

btnDelete.addEventListener('click', ()=>{
	if ((display.textContent == '' && expression.textContent != '')
		|| ( expression.textContent != '' && display.textContent == '0'))
	{
		console.log("cheguei")
		expression.textContent = '';
		display.textContent = stash;
		signal = '';
		return ;
	}
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
	expression.textContent = "";
	stash = 0;
});

numbers.map(el=>{
	el.addEventListener('click', ()=>{
		if(display.textContent == '0' || control == 0)
			display.textContent = el.textContent;
		else
			display.textContent += el.textContent;
		control = 1;
	});
});

operators.map(el =>{
	el.addEventListener("click", ()=>{
		if (display.textContent[display.textContent.length - 1] == '.')
			return ;
		if (expression.textContent != '' && display.textContent != '')
			execute();
		signal = el.textContent;
		if (display.textContent != '')
			stash = display.textContent;
		expression.textContent = stash + " " + signal;
		display.textContent = '';
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

function stringToNumber(n){
	if (n.includes('.'))
		return (parseFloat(n));
	return (parseInt(n));
}

function execute(){
	if (display.textContent[display.textContent.length - 1] == '.' || display.textContent == '')
			return ;
	const a = stringToNumber(stash);
	const b = stringToNumber(display.textContent);
	expression.textContent = `${a} ${signal} ${b}`;
	if (signal == '+')
		display.textContent = add(a, b).toString();
	else if (signal == '-')
		display.textContent = subtract(a, b).toString();
	else if (signal == 'x')
		display.textContent = multiply(a, b).toString();
	else if (signal == '/')
		display.textContent = divide(a, b).toString();
}

equal.addEventListener('click', ()=>{
	if (display.textContent == '')
		return ;
	execute();
	expression.textContent = '';
	control = 0;
});
