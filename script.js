const batsmen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const fullGame = (".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W");
const batsmenScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const notOut = ["Not out", "Not out", "Not out", "Not out", "Not out", "Not out", "Not out", "Not out", "Not out", "Not out", "Not out"]
let currentBatsmen = (0);
let secondBatsmen = (1);
totalScore = (0);
out = (0)

for (i=0; i < fullGame.length; i++) {

    if ( i != 0 && Number.isInteger((i+1) / 6)) {

        [currentBatsmen, secondBatsmen] = [secondBatsmen, currentBatsmen]; 

    }
    if (parseInt(fullGame[i]) >= 1) {

        batsmenScore[currentBatsmen] += parseInt(fullGame[i]);
        totalScore += parseInt(fullGame[i]);

    } else if (fullGame[i] === "W") {
        notOut[currentBatsmen] = " "; 
        if (currentBatsmen != 11 && secondBatsmen != 11) {

            currentBatsmen = Math.max(currentBatsmen, secondBatsmen) + 1;
            out += 1;

        }
    }
}

for (i=0; i < batsmenScore.length; i++) {
    if (batsmenScore[i] === 0) {
        batsmenScore[i] = "-";
    }
}

for (i=0; i < batsmen.length; i++) {
    console.log(`Batsmen ${batsmen[i]}: ${batsmenScore[i]} ${notOut[i]}`);
}
console.log(`Total: ${totalScore} / ${out}`)