class Heroi {
	constructor(nome, idade, tipo) {
  		this.nome = nome;
  		this.idade = idade;
  		this.tipo = tipo;
  	}
  
  	atacar() {
  		let ataque;
  
  		if (this.tipo === "mago") {
  			ataque = "Magia";
  		} else if (this.tipo === "guerreiro") {
  			ataque = "Espada";
  		} else if (this.tipo === "monge") {
  			ataque = "Artes Marciais";
  		} else if (this.tipo === "ninja") {
  			ataque = "Shuriken";
  		}
  
  		console.log(`O ${this.nome} com idade de ${this.idade} anos e que é do tipo ${this.tipo}, atacou usando ${ataque}`);
  	}
}

let nomeHeroi = ("Digite o nome do Herói");
let idadeHeroi = ("Digite a idade do Herói");
let tipoHeroi = ("Digite o tipo do Herói");

let heroi1 = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);

heroi1.atacar();
