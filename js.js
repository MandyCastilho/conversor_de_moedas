const apiKey = "SUA_CHAVE_AQUI";
const apiUrl = "https://open.er-api.com/v6/latest/";

async function getCurrencies() {
    try {
        const response = await fetch(`${apiUrl}USD?apikey=${apiKey}`);
        const data = await response.json();
        if (data.result === "success") {
            const currencies = Object.keys(data.rates);
            const fromSelect = document.getElementById("fromCurrency");
            const toSelect = document.getElementById("toCurrency");
            currencies.forEach(currency => {
                let option1 = new Option(currency, currency);
                let option2 = new Option(currency, currency);
                fromSelect.add(option1);
                toSelect.add(option2);
            });
            fromSelect.value = "BRL";
            toSelect.value = "USD";
        }
    } catch (error) {
        console.error("Erro ao carregar moedas", error);
    }
}

async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultElement = document.getElementById("result");
    
    if (!amount || amount <= 0) {
        resultElement.innerText = "Por favor, insira um valor válido";
        return;
    }
    
    try {
        const response = await fetch(`${apiUrl}${fromCurrency}?apikey=${apiKey}`);
        const data = await response.json();
        if (data.result === "success") {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            resultElement.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            resultElement.innerText = "Erro ao obter a taxa de câmbio.";
        }
    } catch (error) {
        resultElement.innerText = "Erro ao obter a taxa de câmbio.";
    }
}

window.onload = getCurrencies;