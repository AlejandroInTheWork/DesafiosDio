let nomeHeroi = "Dante";
let vitorias = 86;
let derrotas = 46;
let rank = "";

function pontuacao(numA, numB) {
    let saldo = numA - numB;
    return saldo;
}

let saldo = pontuacao(vitorias, derrotas);

if (saldo < 10) {
    rank = "Bronze";
} else if (saldo > 10 && saldo < 20) {
    rank = "Prata";
} else if (saldo > 20 && saldo < 30) {
    rank = "Ouro";
} else if (saldo > 30 && saldo < 40) {
    rank = "Diamante";
} else if (saldo >= 40) {
    rank = "Legendário";
}

console.log(`Caro Sr. ${nomeHeroi}, ao fim dessa jornada seu saldo de batalhas foi ${saldo} em vitórias e derrotas, e ao fim, seu rank definido foi ${rank}.`);
