const readline = require("readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function classificarHerois() {

    let continuar = "s";

    while (continuar.toLowerCase() === "s") {

        const nome = await rl.question("Digite o nome do herói: ");
        const respostaXP = await rl.question("Digite a quantidade de XP: ");

        const xp = Number(respostaXP);

        let nivel;

        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp <= 2000) {
            nivel = "Bronze";
        } else if (xp <= 5000) {
            nivel = "Prata";
        } else if (xp <= 7000) {
            nivel = "Ouro";
        } else if (xp <= 8000) {
            nivel = "Platina";
        } else if (xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        console.log("");
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
        console.log("");

        continuar = await rl.question(
            "Deseja classificar outro herói? (s/n): "
        );

        console.log("");
    }

    console.log("Programa encerrado.");

    rl.close();
}

classificarHerois();