# 🌟 Aula Objetos | Revisão de Arrays e Introdução a Objetos

Mini projeto criado durante a aula prática para revisar métodos de arrays, reforçar conceitos de objetos em JavaScript e renderizar cards de produtos diretamente no DOM.

🛠 Tecnologias utilizadas

HTML
CSS e SCSS
JavaScript

📁 Estrutura do projeto
index.html
script.js
style.scss
style.css
style.css.map

🔁 Revisão de Arrays

A aula revisou os métodos essenciais do dia a dia de qualquer dev:

push para adicionar no final
unshift para adicionar no começo
pop para remover o último
shift para remover o primeiro
splice para remover e substituir itens
sort com função de comparação para ordenar números corretamente

Exemplo da aula:

let nomes = ["Vini", "Gabriela", "Karina", "Niedja", "Rafael", "Arthur"];
nomes.push("Thiago");
nomes.unshift("José Ricardo");
nomes.pop();
nomes.shift();
nomes.splice(1, 1, "Igor", "Amanda", "");

🧱 Introdução a Objetos

Objetos permitem organizar dados em pares chave e valor.

Exemplo visto em aula:

let pessoas = [
{
nome: "Rafael",
idade: 26,
profissao: "Dev",
endereco: { rua: "Av. Brasil", num: 94 }
},
{
nome: "Thiago",
idade: 25,
profissao: "Dev"
}
];

Objeto com array dentro:

let aluno = {
nome: "Pedro",
idade: 28,
nota: [8.5, 9.0, 5.5]
};

💻 Projeto prático: Lista de Produtos com Cards

A partir de um array de objetos, criamos cards automaticamente no HTML usando JavaScript e manipulação do DOM.

const produtos = [
{ nome: "Notebook", preco: 4500 },
{ nome: "Mouse", preco: 80 },
{ nome: "Teclado", preco: 120 },
{ nome: "Monitor", preco: 900 }
];

const container = document.querySelector("#produtos");

for (let i = 0; i < produtos.length; i++) {
const item = produtos[i];

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = ` <h3>${item.nome}</h3>
    <p>${item.preco}</p>
 `;

container.appendChild(card);
}

🎨 Estilo dos cards
.card {
background-color: aquamarine;
padding: 10px;
margin: 8px 0;
border-radius: 6px;
width: 200px;
}

🚀 Como executar o projeto

Abra a pasta no VSCode

Clique em Watch Sass para gerar o style.css

Abra o index.html com Live Server

Veja os cards sendo renderizados automaticamentet

📚 Aprendizados da aula

Manipulação de arrays
Métodos essenciais
Criação e leitura de objetos
Array de objetos
Renderização dinâmica no DOM
Criação de elementos HTML via JavaScript
Mini projeto completo integrado

🌈 Próximos passos

Adicionar mais produtos
Criar botões de adicionar e remover
Deixar os cards responsivos
Explorar eventos como click e mouseover
Transformar em uma mini loja
