const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

function formatarValor(valor) {
    return Number(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 4
    });
}

fetch(url)
    .then((resposta) => {
        if (!resposta.ok) {
            throw new Error('Erro ao consultar a API');
        }

        return resposta.json();
    })
    .then((dados) => {
        const dolar = dados.USDBRL;

        document.getElementById('valorAtual').textContent = formatarValor(dolar.bid);
        document.getElementById('maiorValor').textContent = formatarValor(dolar.high);
        document.getElementById('menorValor').textContent = formatarValor(dolar.low);
        document.getElementById('ultimaAtualizacao').textContent = dolar.create_date;
    })
    .catch((erro) => {
        console.log(erro);
        document.getElementById('erro').classList.remove('d-none');
    });
