/*const calculator = (operationFn) => operationFn; //ritorna il valore di operationFn

console.log(calculator(sum(2, 3)));
console.log(calculator);
console.log(calculator(sum));*/

const sum = (num1, num2) => num1 + num2;
const calculator = (operationFn) => {
  let x = 200;

  const value = operationFn(x, 100);
  return value;
};

console.log(calculator(sum));

/*le invocazioni vogliono le parentesi tonde








La parentesi tonda crea contesto a volte, come in matematica (x+y)
*/
