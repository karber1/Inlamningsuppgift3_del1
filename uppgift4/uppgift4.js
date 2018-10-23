/*
Här har jag skapat en funktion som beräknar volymen och arean av en sfär genom parametern radie.
för att beräkna volymen använder jag mig av två befintliga metoder i JS.
jag multiplicerar Math.PI med fyra och Math.Pow för att få radien upphöjt med 3. 
Sen använde jag samma metoder för att beräkna arean.
Jag returnerar dessa variabler i en array för att kunna skriva ut två värden samtidigt.

*/


function sphere(radie){
let volym = (4*Math.PI*Math.pow(radie,3))/3;
let area = 4*Math.PI*Math.pow(radie,2);
return ["Volymen på klotet är: " + volym.toFixed(1) +  "cm3",
"Arean på klotet är: " + area.toFixed(1) + "cm"];


}
/*
Här anropar jag funktionen i loggen och fyller i ett argument till parametern radie. 
Sedan får jag volymen beräknat på index [0] och arean på index [1] i konsollen.
 */
console.log(sphere(5));