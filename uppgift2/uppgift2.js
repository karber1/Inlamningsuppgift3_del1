/* 
Här skapar jag en funktion som heter Pythagoras med parametrararna a och b. 
för att få fram längden på hypotenusan behöver jag skapa en variabel som innefattar a upphöjt med a och b upphöjt med b
efter jag gjort det använder jag funktionen math.sqrt för att få fram kvadratroten ur (a*a) + (b*b)
och returnerar det värdet i konsolen.
*/


function pythagoras(a, b){
let hypo = (a*a) + (b*b)
return "Hypotenusans längd blir: " + Math.sqrt(hypo) + "cm";
}

console.log(pythagoras(3,4));