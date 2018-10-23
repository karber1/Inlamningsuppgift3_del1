/* Börjar med att skapa en konstruktor för adressen då den ska ligga som en parameter i personobjektet.
Skapar sedan en konstruktor för personobjektet och skapar där i en metod för print(); Som ska skriva ut adressen
i svenskt format.
 */
function Adress(gatunummer, postnummer, ort){
    this.gatunummer = gatunummer;
    this.postnummer = postnummer;
    this.ort = ort;
}
function Person(namn, ePost, mobil, adress ){
this.namn = namn;
this.ePost = ePost;
this.mobil = mobil; 
this.adress = adress;{
    this.print = function(){
        console.log( `
        ${this.namn}\n
        ${this.adress.gatunummer}\n        ${this.adress.postnummer} ${this.adress.ort}
        `)
        }
    }
};
/*Här under har jag deklarerat en person genom nyckelordet "new", men jag behöver också få in värden i adress-egenskapen
som finns inuti personobjektet.
 Därför skapar jag först ett adressobjekt som jag sedan anropar som sista egenskapen i person objektet.
 */
 let kallesAdress = new Adress("Åmänningevägen 54", "12057", "årsta");
let kalle = new Person("Karl Berglöf", "karl.berg@nackademin.se", "073-548 87 86", kallesAdress);



let jonasAdress = new Adress("Hornsgatan 54", "120 28", "Stockholm");
let jonas = new Person("Jonas Bengtsson", "jonas.bengtsson@gmail.com", "075-685 25 75", jonasAdress);


jonas.print();
kalle.print();

//Vill jag skriva ut hela objekten gör jag såhär console.log(kalle, jonas);