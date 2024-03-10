const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

// Objeto - igual o typedef do C++
const verdeCipreste = {
  nome: "Verde-cipreste",
  pasta: "imagens-verde-cipreste",
};
const meiaNoite = {
  nome: "Meia-noite",
  pasta: "imagens-meia-noite",
};
const azulInverno = {
  nome: "Azul-inverno",
  pasta: "imagens-azul-inverno",
};
const estelar = {
  nome: "Estelar",
  pasta: "imagens-estelar",
};
const rosaClaro = {
  nome: "Rosa-claro",
  pasta: "imagens-rosa-claro",
};

// Juntando as opções (objetos) em uma array (vetor)
const opcoesCores = [verdeCipreste, meiaNoite, azulInverno, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45mm"];

// Imagem abaixo do relógio (1 porque são 3 imagens, e é a do meio)
let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;
// Trocando imagem debaixo do relógio
function trocarImagem() {
  /* 
    document.querySelector - com ele você escolhe a tag parâmetro de busca 
    document.querySelector('[tag="o que tem na tag"]:evento').o que você quer
    Este evento pode ser hover, checked...
  */

  // Neste caso, eu quero o id, então usa o query selector e busca o id da tag que tem 'name= "opcao-imagem" no evento :checked'
  const idOpcaoSelecionada = document.querySelector(
    '[name = "opcao-imagem"]:checked'
  ).id;



  // Tem que mudar a opção de cor selecionada também, porque senão a primeira execução fica com problema  
  const idCorSelecionada = document.querySelector(
    '[name="opcao-cor"]:checked'
  ).id;
  corSelecionada = idCorSelecionada.charAt(0);



  //Foi utilizado esse comando charAt porque o id do input é "0-imagem", e com esse charAt ele vai extrair somente o caractere da posição 1
  imagemSelecionada = idOpcaoSelecionada.charAt(0);

  // Ele busca o id do elemento que quiser ( 2º linha) e muda o diretório de acordo com o id da imagemSelecionada
  imagemVisualizacao.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-" +
    imagemSelecionada +
    ".jpeg";
    
}

// mudar o tamanho da imagem e mudar o título de acordo com a opção
function trocarTamanho() {
  //Atualizar variável de controle do tamanho da caixa
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

  // InnerText é um texto que tá dentro de uma tag
  // Ele vai armazenar o numero do id

  tituloProduto.innerText =
    "Pulseira loop esportiva " +
    opcoesCores[corSelecionada].nome +
    " para caixa de " +
    opcoesTamanho[tamanhoSelecionado];
  if (opcoesTamanho[tamanhoSelecionado] === opcoesTamanho[0]) {
    // Significa que eu tô adicionando a classe do CSS dentro dessa variável, assim mudando o estilo da imagem que tem o id armazenado pela variável (linha 1)
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

// Função pra trocar a cor das pulseiras
function trocarCor() {
  //Atualizar variável de controle da cor da página
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-cor"]:checked'
  ).id;
  corSelecionada = idOpcaoSelecionada.charAt(0);
  // Trocar título da página (cor)
  // Pega corSelecionada.nome porque é o objeto
  tituloProduto.innerText =
    "Pulseira loop esportiva " +
    opcoesCores[corSelecionada].nome +
    " para caixa de " +
    opcoesTamanho[tamanhoSelecionado];

  // Trocar título da cor
  nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;

  // Trocar imagens das miniaturas exibidas
  miniaturaImagem0.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-0.jpeg";
  miniaturaImagem1.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-1.jpeg";
  miniaturaImagem2.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-2.jpeg";


  // Trocar imagem grande exibidas
  imagemVisualizacao.src =
    "./imagens/opcoes-cores/" +
    opcoesCores[corSelecionada].pasta +
    "/imagem-" +
    imagemSelecionada +
    ".jpeg";
}
