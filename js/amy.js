var svgBlock = document.querySelector(".foo");
var classValues = svgBlock.classList;

alert(" Hi babe. Say ok.");
console.log(classValues);
alert(classValues + " This returns the svg's list of classes.");

alert("Hit ok to execute the function that adds a new class named baz");
// svgBlock.classList.add("baz");

console.log(classValues);
alert(classValues + " This is the new class list. The class baz specifies a beige background.");

var color = prompt("What's your favorite color? Use a css-friendly name, please :)");

svgBlock.style.backgroundColor = color;


document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}


document.write("Thanks - you're done!");

console.log("End program");






