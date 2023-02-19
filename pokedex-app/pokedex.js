var newLi = document.createElement("li");
var newP = document.createElement("p")
var entries = document.getElementById("pokedex-entries").getElementsByTagName("ul")[0];
newLi.appendChild(newP);

let name = document.getElementById("name");
let type = document.getElementById("type");
let region = document.getElementById("region");

"name" = "name".value;
"type" = "type".value;
"region" = "region".value;

var myArray = [
    "name", "type", "region",
]

function logic() {

    let result;
    if ("name" !== "" && "type" !== "" && "region" !== "") {
        result = ("name", "type", "region")
    }

    else {
        alert("Please provide all inputs")

    newP.document.getElementById("app").innerHTML = myArray
    }}
/* <li class="${pokemon[0]}">
<span>${pokemon[0]}</span>
<span>${pokemon[1]}</span>
<span>${pokemon[2]}</span>
<li></li> */

/* let result;

   if (inputOne !== "" && inputTwo !== "") {

       inputOne = parseInt(inputOne);
       inputTwo = parseInt(inputTwo);

       if (theOperator == "+") {
           result = inputOne + inputTwo;
       }
       else if (theOperator == "-") {
           result = inputOne - inputTwo;
       }
       else if (theOperator == "/") {
           result = inputOne / inputTwo;
       }
       else if (theOperator == "*") {
           result = inputOne * inputTwo;
       }
       else {
           alert("Hacked!");
       }

       document.getElementById("output").innerHTML = result;
   }
   else {
       alert("Please provide all inputs");
   } */