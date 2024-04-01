class geradordeheroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        let ataque = " ";
        if (classe === "mago") {
            ataque = "usou magia";
        } else if (classe === "guerreiro") {
            ataque = "usou espada";
        } else if (classe === "monge") {
            ataque = "usou artes marciais";
        } else if (classe === "ninja") {
            ataque = "usou shuriken";
        }
        console.log("O " + nome + " com a classe " + classe + " " + ataque);
    }
}

new geradordeheroi("Alejandro", 22, "ninja");
