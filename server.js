const express = require('express');

const app = express();

app.use(express.static('public'));

const porta = process.env.PORT || 3000;

app.listen(porta, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
