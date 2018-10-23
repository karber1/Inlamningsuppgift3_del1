/*Skapar först en prompt för att hämta cirkelns radie från användaren.
Sedan skapar jag en funktion för cirkeln. Jag beräknar först ut diametern på cirkeln genom att plusa radien med radien.
Efter det skapar jag en variabel för omkretsen och en för arean.
returnerar sedan dessa i en array för att kunna skriva ut två tal samtidigt. 
*/
let radie = prompt("fyll i cirkelns radie");

function Cirkel(radie){
let omkrets = 2 * Math.PI * radie;
let area = Math.PI * radie * radie;

return [omkrets.toFixed(1) + "cm", area.toFixed(1) + "cm"];
}
/*Här under skapar jag en alert ruta för att ge använderen ett svar. Jag hämtar omkretsen och arean från arrayen som
returneras i funktionen ovan.
*/
alert ("Omkretsen blir: " + Cirkel(radie)[0] + " och arean blir: " + Cirkel(radie)[1]);
console.log(Cirkel(radie));

