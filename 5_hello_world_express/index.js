const express = require("express");

// define uma aplicação backend em Express
// recursos pré-configurados
const app = express();

// define um roteamento
// manipulador de rota
app.get("/", (requisicao, resposta) => {
    resposta.send("Modifiquei");
})

// req = requisição do cliente / objeto com dados do cliente/solicitante
// res = resposta do servidor / objeto com dados para a resposta do servidor (qual o código ou dados que quero responder)
app.get("/teste", (req, res) => {
    // manipulador de rota
    res.send("<p>Batata</p>")
})

// inicializa a escuta de requisições do servidor:
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/")
});


/** Exercício I: Crie dois arquivos html: inicio.html e
 * ajuda.html. Defina uma rota GET /inicio que lê o arquivo
 * inicio.html e responde com seu conteúdo. Defina outra
 * rota /ajuda que lê o arquivo ajuda.html e responde com
 * seu conteúdo. Dentro do arquivo inicio.html, deve haver
 * um link para a página de ajuda.
 * TEMPO = 15 min
 */

const fs = require("fs");

app.get("/inicio", (req, res) => {
    const arquivo = fs.readFileSync("./inicio.html");
    res.send(arquivo.toString());
})
// ou : res.send(fs.readFileSync("./inicio.html").toString());

app.get("/ajuda", (req, res) => {
    const arquivo = fs.readFileSync("./ajuda.html");
    res.send(arquivo.toString());
})

// // parametro de caminho/rota
// app.get("/funcionarios/:cpf", (req, res) => {
//     console.log(req.params);
//     // req.params = guarda todos os parametros de rota

//     // const cpf = req.params.cpf; ou:
//     const {cpf} = req.params;
//     res.send(`Funcionário encontrado: ${cpf}`)
// })
// // nome que vai após o ponto e virgula no caminho, é o nome que vai no params

//usar função is valid e mandar codigo de status express

app.get("/pessoas/:nome/:empresa", (req, res) => {
    const { nome, empresa } = req.params;
    res.send(`${nome} e ${empresa} `);
})

// http://localhost:3000/pessoas/julia/casa



// Exercício I: Crie uma calculadora IMC (/imc), receba via parâmetros
// fixos, um peso e uma altura (converter p/ number). E responde
// com o resultado do cálculo.
app.get("/imc/:peso/:altura", (req, res) => {
    const { peso, altura } = req.params;
    const imc = (Number(peso) / (Number(altura) * Number(altura)));
    res.send(`Peso: ${peso} e altura: ${altura}, IMC = ${imc.toFixed(2)}`);
})

// http://localhost:3000/imc/88/1.79
// ou:
// const { peso, altura } = Number(req.params);
// const imc = peso / (altura * altura) );



// Exercício II: Na rota /funcionarios/:cpf, valide o cpf passado
// pelo cliente. Se for válido responda positivamente (200), caso contrário
// responda negativamente (400).

const CPF = require("cpf");

app.get("/funcionarios/:cpf", (req, res) => {
    console.log(req.params);
    const {cpf} = req.params;
    if(CPF.isValid(cpf)){
        res.status(200).send(`CPF ${cpf} é válido!`);
    } else {
        res.status(400).send(`O cpf ${cpf} é INVÁLIDO.`)
    }    
})


// Exercício III: Crie uma rota /cpfs/:numero. E responde com a quantidade de
// cpfs aleatórios solicitada.

app.get("/cpfs/:numero", (req, res) => {
    const numero = Number(req.params.numero);
    for(let i = 0; i < numero; i++) {
        res.write(`<p>${CPF.generate()}</p>`);
    }
    res.end(); //write não faz o send automatico, por isso precisa colocar o end
})


// query // consulta
app.get("/youtube", (req, res) => {
    // console.log(req.query);
    const { canal } = req.query;
    res.send("Youtube: " + canal);
})

// no navegador a interrogação representa o query
// no navegador: http://localhost:3000/youtube?canal=lucasmontano
// na pagina aparece: Youtube: lucasmontano


// no params é obrigatório passar a rota, no query não, porque o parametro pode ter ou não ter




// Exercício I: Crie uma rota que receba um parâmetro query `nome` e retorne uma mensagem de boas-vindas personalizada. Se `nome` não for fornecido, exiba uma mensagem de erro.
app.get("/oi", (req, res) => {    
    const { nome } = req.query;
    if(nome){
        res.status(200).send(`Bem vindo(a) ${nome}!`);
    } else {
        res.status(400).send(`Digite um nome válido.`)
    }
})

// Exercício II: Crie uma rota que receba dois parâmetros query, `num1` e `num2`. Retorne como resposta a soma dos números (se os dois numeros não forem fornecidos mostrar uma mensagem de erro).
app.get("/soma", (req, res) => {    
    const { num1, num2 } = req.query;
    
    if(num1 && num2){
        const soma = Number(num1) + Number(num2);
        res.status(200).send(`A soma dos números ${num1} e ${num2} é igual a ${soma}!`);
    } else {
        res.status(400).send(`Digite dois números válidos.`)
    }
})

// Exercício III: Crie uma rota que receba um parâmetro query, `lang` e exiba uma mensagem de boas vindas no idioma (português ou inglês). Caso a linguagem não seja fornecida ou suportada exiba uma mensagem de erro.
app.get("/boasvindas", (req, res) => {
    const { lang } = req.query;

    if (lang === "pt-br"){
        res.send("Bem-vindo(a)!")
    } else if (lang === "en") {
        res.send("Welcome")
    } else {
        res.status(400).send(`Idioma não suportado.`)
    }
})

const usuarios = require("./usuarios");

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.get("/usuarios/novo", (req, res) => {
    const { nome, email }= req.query;
    const novoUsuario = {nome: nome, email: email}; 
    usuarios.push(novoUsuario);
    res.status(201).json({mensagem: "Usuário adicionado"});  
  });
  


app.get("/usuarios/:index", (req, res) => {
    const index = Number(req.params.index); // quando for um banco de dados passar o id e não index
    const usuarioEncontrado = usuarios[index];

    if(usuarioEncontrado) {
        res.json(usuarioEncontrado);
    } else {
        res.status(404).json({mensagem: "Usuário não encontrado"})
    }
    
});


// Exercício I: Crie uma rota "/usuarios/email", e filtre o usuário com o email fornecido via parâmetros de rota. Caso não encontre, responda com 404.
// => /usuarios/email/gabriel.braga@soulcode.com

app.get("/usuarios/email/:email", (req, res) => {
    const { email } = req.params;  // parâmetro de rota
    const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email);;

    if(usuarioEncontrado) {
        res.json(usuarioEncontrado);
    } else {
        res.status(404).json({mensagem: "Usuário não encontrado"})
    }    
});

// Exercício II: Crie uma rota "/usuarios/novo", e por meio dos parâmetros de consulta colete nome e email para inserir no array de usuários.

// app.get("/usuarios/novo", (req, res) => {
//     const { nome, email }= req.query;
//     const novoUsuario = {nome: nome, email: email}; 
//     usuarios.push(novoUsuario);
//     res.status(201).json({mensagem: "Usuário adicionado"});  
//   });

  // se colocar /usuario/novo, ele casa com a rota usuarios/:index 
  // por isso joga essa rota para antes da do index