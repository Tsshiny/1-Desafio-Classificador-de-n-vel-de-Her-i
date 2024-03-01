function calculoNivel(Vitorias, Derrotas) {
    let saldoVitorias = Vitorias - Derrotas;
    let nivel;

    if (Vitorias <= 10) {
        nivel = "ferro";
    } else if (Vitorias >= 11 && Vitorias < 20) {
        nivel = "bronze";
    } else if (Vitorias >= 21 && Vitorias < 50) {
        nivel = "prata";
    } else if (Vitorias >= 51 && Vitorias < 80) {
        nivel = "ouro";
    } else if (Vitorias >= 81 && Vitorias < 90) {
        nivel = "diamante";
    } else if (Vitorias >= 91 && Vitorias < 100) {
        nivel = "lendario";
    } else if (Vitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

let resultado = calculoNivel(40, 8);
console.log("O Herói tem de saldo de " + resultado.saldoVitorias + " está no nível de " + resultado.nivel);
