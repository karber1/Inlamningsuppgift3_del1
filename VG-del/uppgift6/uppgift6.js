
    let inMat = prompt("Beräkna fakulteten, mata in ett tal mellan 1-1000:");

    

while (inMat >1000 || inMat <0 || isNaN(inMat) || inMat === "") {
    alert("Du har matat in ett felaktigt tal, testa igen.");
    inMat = prompt("Beräkna fakulteten, mata in ett tal mellan 1-1000:");
   }



function fakultet(nummer){

if (nummer === "0") {
        return inMat + "! = " + 1;
}
 else {
     
 
for (let index = nummer - 1; index >= 1; index--) {
    nummer = nummer * index;
    
}
    }
return inMat + "! = " + nummer;

}

document.getElementById("svar").innerHTML = fakultet(inMat);