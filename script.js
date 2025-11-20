// Criando um array de nomes
let nomes = ["Vini", "Gabriela", "Karina", "Niedja", "Rafael", "Arthur"];
//               0        1         2        3         4        5
console.log(nomes); // Exibe o array completo no console

// Adiciona "Thiago" no FINAL do array
nomes.push("Thiago");
// console.log(nomes);

// Adiciona "José Ricardo" no COMEÇO do array
nomes.unshift("José Ricardo");
// console.log(nomes);

// Remove o último nome do array
nomes.pop();
// console.log(nomes);

// Remove o primeiro nome do array
nomes.shift();
// console.log(nomes);

// splice(posição, quantidadeRemover, itensParaAdicionar)
// Aqui: remove 1 item na posição 1 e adiciona "Igor", "Amanda" e ""
nomes.splice(1, 1, "Igor", "Amanda", "");
// console.log(nomes);

// --------------------------------------------------------------------
// SORT COM NÚMEROS (comentado)
// --------------------------------------------------------------------

// let numeros = [9, 7, 1, 6, 10, 8];

// // Ordenação correta de números (sort padrão ordena como string)
// numeros.sort(function (a, b) {
//   return a - b;
// });
// console.log(numeros);

// --------------------------------------------------------------------
// OBJETOS (comentado)
// --------------------------------------------------------------------

// let pessoas = [
//   {
//     nome: "Rafael",
//     idade: "26",
//     profissao: "Dev",
//     endereco: {
//       rua: "Av.Brasil",
//       num: 94,
//     },
//   },
//   {
//     nome: "Thiago",
//     idade: "25",
//     profissao: "Dev",
//   },
// ];

// console.log(pessoas);

// let alunos = {
//   nome: "Pedro",
//   idade: "28",
//   nota: [8.5, 9.0, 5.5],
// };

// console.log(alunos.nota[0]); // Mostra a primeira nota do aluno

// --------------------------------------------------------------------
// EXEMPLO COM DOM E ARRAY
// Cria cards de produtos na tela
// --------------------------------------------------------------------

const produtos = [
  { nome: "Notebook", preco: 4500 },
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 },
];

// Pega o elemento da página onde os produtos serão adicionados
const container = document.querySelector("#produtos");

// Loop para percorrer todos os produtos
for (let i = 0; i < produtos.length; i++) {
  const item = produtos[i]; // Pega o produto atual

  // Cria uma div para o card
  const card = document.createElement("div");
  card.classList.add("card"); // Adiciona a classe CSS "card"

  // Insere conteúdo HTML dentro do card
  card.innerHTML = `
        <h3>${item.nome}</h3>
        <p>${item.preco}</p>
    `;

  // Adiciona o card dentro do container no HTML
  container.appendChild(card);
}