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
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value.replace(",", "."));
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultElement = document.getElementById("result");
    const loadingElement = document.getElementById("loading");

    if (!amount || amount <= 0) {
        resultElement.innerText = "Por favor, insira um valor válido";
        return;
    }

    loadingElement.style.display = "inline-block";

    try {
        const response = await fetch(`${apiUrl}${fromCurrency}?apikey=${apiKey}`);
        const data = await response.json();
        if (data.result === "success") {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            resultElement.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            saveToHistory(amount, fromCurrency, convertedAmount, toCurrency);
        } else {
            resultElement.innerText = "Erro ao obter a taxa de câmbio.";
        }
    } catch (error) {
        resultElement.innerText = "Erro ao obter a taxa de câmbio.";
    } finally {
        loadingElement.style.display = "none";
    }
}

function invertCurrencies() {
    const fromSelect = document.getElementById("fromCurrency");
    const toSelect = document.getElementById("toCurrency");
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    convertCurrency();
}

function saveToHistory(amount, from, converted, to) {
    const history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
    const newEntry = `${amount} ${from} = ${converted} ${to}`;
    history.unshift(newEntry); // adiciona no início
    localStorage.setItem("conversionHistory", JSON.stringify(history.slice(0, 10))); // Limita a 10 entradas
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById("history");
    const history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
    historyList.innerHTML = "";
    history.forEach(entry => {
        const li = document.createElement("li");
        li.innerText = entry;
        historyList.appendChild(li);
    });
}

function clearHistory() {
    localStorage.removeItem("conversionHistory");
    renderHistory();
}

window.onload = () => {
    getCurrencies();
    renderHistory();
};
