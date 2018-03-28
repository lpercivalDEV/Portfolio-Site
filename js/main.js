///---///---///---///---///
 ///===PSEUDO  CODE===///
///---///---///---///---///
// User sees buttons and screen display
// User can click buttons
// User expects to select numbers, see choices, and get calculated result
// Need to create a screen for displaying choices and results
// Need to create buttons for user to click on
// Need functions for calculating the numbers using operators
// Need to display the calculated result
// Would be nice if there is a way to reset calculator to do another calc
//
//What kinds of variables would we need?
	//Need variables for the different numbers
	//Need variables for the operators
	//Need variable for the result
	//Variable for display?
	//
//What kinds of functions would we need?
	//Need event listeners to register button clicks
	//Need function to take those button clicks and register them as numbers
	//Need function to calculate the numbers selected
	//Need a function to display the anser
	//Would be nice if there was a function for deleting numbers/results in order to do different calculation
	//
///---///---///---///---//////---///---///---///---//////---///
// Leon's Demo Code:
//Here are the 4 event listeners for the 4 buttons the user can click.
//These event listeners also have the right functions listed after each one
//	document.getElementById('add').onclick=add;
//	document.getElementById('sub').onclick=sub;
//	document.getElementById('mult').onclick=mult;
//	document.getElementById('divide').onclick=divide;
//
//function add(){
//	get values out of imput
//	do the mat
//	display
//}
//   example of above function:
//	function add(){
		//get the values//
//			var num1 = parseFloat(document.getElementById('firstVal').value)
//			var num2 = parseFloat(document.getElementById('secondVal').value)
		//do the math//
//			var sum =  num1+num2
		//display//
//			document.getElementById('result').innerHTML=sum
		//clear the inputs (after getting result)
//			document.getElementById('firstVal').value=""
//			document.getElementById('secondVal').value=""
//
//	function sub(){
		//get the values//
//			var num1 = parseFloat(document.getElementById('firstVal').value)
//			var num2 = parseFloat(document.getElementById('secondVal').value)
		//do the math//
//			var sub =  num1-num2
		//display//
//			document.getElementById('result').innerHTML=sub
		//clear the inputs (after getting result)
//			document.getElementById('firstVal').value=""
//			document.getElementById('secondVal').value=""
//
//
///---///---///---///---//////---///---///---///---//////---///





///---///---///---///---///
  ///===ACTUAL CODE===///
///---///---///---///---///


alert("MATH IS FUN, PUNY MORTAL!");

//inputs
var leftInput = document.getElementById("valueOne");
var rightInput = document.getElementById("valueTwo");

//buttons
var additionButton = document.getElementById("addition");
var subtractionButton = document.getElementById("subtraction");
var multiplicationButton = document.getElementById("multiplication");
var divisionButton = document.getElementById("division");

//result
var result = document.getElementById("result");

//event handler
additionButton.onclick = add;
subtractionButton.onclick = subtract;
multiplicationButton.onclick = multiply;
divisionButton.onclick = divide;

function add() {
  var firstNumToAdd = parseFloat(leftInput.value);
  var secondNumToAdd = parseFloat(rightInput.value);
  var sum = firstNumToAdd + secondNumToAdd;
  console.log(sum);
  result.innerHTML = sum;
  clearInputs(); 
}

function subtract() {
  var firstNumToAdd = parseFloat(leftInput.value);
  var secondNumToAdd = parseFloat(rightInput.value);
  var sum = firstNumToAdd - secondNumToAdd;
  console.log(sum);
  result.innerHTML = sum;
  clearInputs();

}

function multiply() {
  var firstNumToAdd = parseFloat(leftInput.value);
  var secondNumToAdd = parseFloat(rightInput.value);
  var sum = firstNumToAdd * secondNumToAdd;
  console.log(sum);
  result.innerHTML = sum;
  clearInputs();
 
}

function divide() {
  var firstNumToAdd = parseFloat(leftInput.value);
  var secondNumToAdd = parseFloat(rightInput.value);
  var sum = firstNumToAdd / secondNumToAdd;
  console.log(sum);
  result.innerHTML = sum;
  clearInputs();
}

function clearInputs(){
  leftInput.value = "";
  rightInput.value = "";
}


