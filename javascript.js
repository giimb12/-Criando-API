const Array1 = '{"nome": "Marcos Jeeves", "idade": "49", "profissao": "Sósia"}'
const Array2 = '{"nome": "Elon Musk", "idade": "51", "profissao": "empresário, fundador da SpaceX, Tesla Inc., Neuralink, OpenAI, The Boring Company e co-fundador da PayPal."}'
const Array3 = '{"nome": "Aurora Aksnes", "idade": "26", "profissao": "cantora e compositora"}'
const Array4 = '{"nome": "Dwayne Johnson (The Rock)", "idade": "50", "profissao": "Ator"}'
const Array5 = '{"nome": "Manoel Gomes", "idade": "53", "profissao": "Cantor"}'
const Array6 = '{"nome": "Kim Jong-un", "idade": "39", "profissao": "Líder supremo da Coreia do Norte"}'

const json1 = JSON.parse(Array1);
const json2 = JSON.parse(Array2);
const json3 = JSON.parse(Array3);
const json4 = JSON.parse(Array4);
const json5 = JSON.parse(Array5);
const json6 = JSON.parse(Array6);

console.log(json1);
console.log(json2);
console.log(json3);
console.log(json4);
console.log(json5);
console.log(json6);

document.getElementById("botao1").addEventListener("click", function() {
document.getElementById("img").src = "imagens/marcos jeeves.webp"
document.getElementById("nome").innerHTML = json1.nome;
document.getElementById("idade").innerHTML = json1.idade;
document.getElementById("profissao").innerHTML = json1.profissao;
});

document.getElementById("botao2").addEventListener("click", function() {
    document.getElementById("img").src = "imagens/elonmusk.png"
    document.getElementById("nome").innerHTML = json2.nome;
    document.getElementById("idade").innerHTML = json2.idade;
    document.getElementById("profissao").innerHTML = json2.profissao;
});

document.getElementById("botao3").addEventListener("click", function() {
    document.getElementById("img").src = "imagens/aurora.jpg"
    document.getElementById("nome").innerHTML = json3.nome;
    document.getElementById("idade").innerHTML = json3.idade;
    document.getElementById("profissao").innerHTML = json3.profissao;
});

document.getElementById("botao4").addEventListener("click", function() {
    document.getElementById("img").src = "imagens/therock.jpg"
    document.getElementById("nome").innerHTML = json4.nome;
    document.getElementById("idade").innerHTML = json4.idade;
    document.getElementById("profissao").innerHTML = json4.profissao;
});

document.getElementById("botao5").addEventListener("click", function() {
    document.getElementById("img").src = "imagens/manoelgomes.jpg"
    document.getElementById("nome").innerHTML = json5.nome;
    document.getElementById("idade").innerHTML = json5.idade;
    document.getElementById("profissao").innerHTML = json5.profissao;
});

document.getElementById("botao6").addEventListener("click", function() {
    document.getElementById("img").src = "imagens/kim.jpg"
    document.getElementById("nome").innerHTML = json6.nome;
    document.getElementById("idade").innerHTML = json6.idade;
    document.getElementById("profissao").innerHTML = json6.profissao;
});



