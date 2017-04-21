/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(a, b) {
  return a * b;
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(a, b) {
  return Number(a) + Number(b);
}


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(a, b) {
  return a - b;
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(a, b) {
  return a / b;
}

function power(a, b) {
  return Math.pow(a, b);
}

  /*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
output = document.getElementById("output");
document.getElementById("wrapper").addEventListener("click", function(event){
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  if(event.target.value == "multiply") { output.innerHTML = multiply(a, b);}
  if(event.target.value == "add") { output.innerHTML = add(a, b);}
  if(event.target.value == "subtract") { output.innerHTML = subtract(a, b);}
  if(event.target.value == "divide") { output.innerHTML = divide(a, b);}
  if(event.target.value == "power") { output.innerHTML = power(a, b);}
});