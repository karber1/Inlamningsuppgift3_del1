
function randomDice() {
    let nummer = [];
    for (i = 0; i < 1000 ; i++) {
        let slump = Math.ceil(Math.random() * 6);
        nummer.push(slump);
    }
   return nummer;

};


function print() {
    let referens = randomDice();
    let antal = [0, 0, 0, 0, 0, 0];
    for (let index = 0; index < referens.length; index++) {

/* 
        if (referens[index] === 1) {
            antal[0]++;
        } else if (referens[index] === 2) {
            antal[1]++;
        } else if (referens[index] === 3) {
            antal[2]++;
        } else if (referens[index] === 4) {
            antal[3]++;
        } else if (referens[index] === 5) {
            antal[4]++;
        } else {
            antal[5]++;
        } */
          switch (referens[index]) {
        case 1:
            antal[0]++;
            break;
        case 2:
            antal[1]++;
            break;
        case 3:
            antal[2]++;
            break;
        case 4:
            antal[3]++;
            break;
        case 5:
            antal[4]++;
            break;
        case 6:
            antal[5]++;
            break;
       
    } 
    }

    let svar = `Antal ettor är: ${antal[0]}!   Antal tvåor är: ${antal[1]}!   Antal treor är: ${antal[2]}! 
Antal fyror är: ${antal[3]}!   Antal femmor är: ${antal[4]}!  Antal sexor är: ${antal[5]}!`;
    console.log(svar);
};

print();
