const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultParagraph = document.getElementById('result');

// funzione per aggiornare il risultato visualizzato sulla pagina
function updateResult(value) {
    resultParagraph.textContent = value.toString();
}

// fnz operazioni matematiche
const addNumbers = (num1, num2) => num1 + num2;
const subtractNumbers = (num1, num2) => num1 - num2;
const multiplyNumbers = (num1, num2) => num1 * num2;
const divideNumbers = (num1, num2) => num1 / num2;

// Crea una funzione per gestire il clic sui pulsanti di operazione
function opOnclick(operationFunction) {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const result = operationFunction(num1, num2);
    updateResult("il risultato è " + result);
}
//listener click pulsanti
addButton.addEventListener('click', function () {
    opOnclick(addNumbers);
});

subtractButton.addEventListener('click', function () {
    opOnclick(subtractNumbers);
});

multiplyButton.addEventListener('click', function () {
    opOnclick(multiplyNumbers);
});

divideButton.addEventListener('click', function () {
    opOnclick(divideNumbers);
});
