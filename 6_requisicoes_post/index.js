const express = require ("express");

// configuração do app:
const app = express();
app.use(express.json()); // lê o body no formato json

// Rotas:
app.post("/enviar", (req, res) => {
    // req.body representa os dados enviados no corpo da requisição post:
    // console.log(req.body);
    const { nome, email, senha, frutasFavoritas } = req.body;
    res.json(`Recebido: ${nome}, ${email}, ${senha}, ${frutasFavoritas}`);
})

// IMC:
app.post("/imc", (req, res) => {
    const { peso, altura } = req.body;
    if((peso !== undefined) &&( altura !== undefined)){
        const imc = peso /(altura ** 2);
        res.json({resultado: imc})
    } else {
        res.status(400).json({mensagem: "Dados inválidos para calcular"})
    }
});


// Escuta das requisições:
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
})