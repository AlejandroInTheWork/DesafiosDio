let nomeHeroi = "Alejandro";
let experiencia = 3458;
let nivelHeroi = " ";

if (experiencia < 1000) {
    nivelHeroi = "bronze";
} else if (experiencia > 1000 && experiencia <= 2000) {
    nivelHeroi = "Prata";
} else if (experiencia > 2001 && experiencia <= 3000) {
    nivelHeroi = "Ouro";
} else if (experiencia > 3001 && experiencia <= 4000) {
    nivelHeroi = "Platina";
} else { nivelHeroi = "Radiante Imortal"}

console.log("Parabéns, o nível do seu herói é: " + nivelHeroi);