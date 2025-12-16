# 💱 Conversor de Moedas — JavaScript e API em Tempo Real

Este projeto é um *Conversor de Moedas online* moderno e funcional, que utiliza uma <strong>API de câmbio</strong> para obter taxas atualizadas entre diversas moedas.

A aplicação permite converter valores rapidamente, inverter moedas, visualizar carregamento durante a requisição e manter um histórico de conversões salvo no navegador, garantindo praticidade e precisão.

---

## ✨ Funcionalidades em Destaque

| Ícone | Recurso | Descrição |
| :--- | :--- | :--- |
| 💰 | **Conversão Instantânea** | Converte valores entre diversas moedas internacionais com taxas atuais. |
| 🌍 | **Carregamento Dinâmico** | Moedas disponíveis são carregadas automaticamente via API externa. |
| 🔄 | **Inversão Rápida** | Troca instantânea entre moeda de origem e destino. |
| ⏳ | **Indicador de Carregamento** | Feedback visual ao usuário durante a consulta à API. |
| 🧾 | **Histórico** | Mantém um histórico das últimas **10 conversões** realizadas. |
| 💾 | **Persistência de Dados** | Histórico salvo no navegador utilizando `localStorage`. |
| 📱 | **Layout Responsivo** | Interface intuitiva e adaptável a dispositivos móveis. |

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura base da aplicação.
* **CSS3:** Estilização moderna, responsiva e interativa.
* **JavaScript (ES6+):** Lógica de conversão, **requisições HTTP** e **armazenamento local**.
* **API de Câmbio:** Fonte de dados para taxas de conversão atualizadas em tempo real.

---

## 🧠 Como o Projeto Funciona

1.  **Inicialização:** Ao carregar a página, o sistema consulta a API para carregar as moedas disponíveis dinamicamente nos *dropdowns*.
2.  **Conversão:** O usuário informa o valor e seleciona as moedas. Ao clicar em **Converter**:
    * A aplicação consulta a taxa de câmbio atual.
    * Exibe o indicador de carregamento (`⏳`).
    * Mostra o resultado formatado na tela.
3.  **Histórico:** Cada conversão bem-sucedida é registrada no histórico e salva no `localStorage`.
4.  **Controle:** O usuário pode inverter as moedas ou limpar o histórico a qualquer momento.

---

## 🎨 Destaques Visuais (CSS)

* **Layout:** Centralizado, limpo e profissional.
* **Paleta de Cores:** Elegante com tons de **vinho/bordô**.
* **Botões:** Utilizam **gradiente** e animações suaves de `hover`.
* **Inputs:** Foco visual destacado para melhor usabilidade.
* **Histórico:** Lista organizada e de fácil visualização.

---

## 💡 Possíveis Melhorias Futuras

* **Conversão Automática:** Converter automaticamente ao alterar os valores ou as moedas selecionadas (sem precisar clicar no botão "Converter").
* **Gráfico de Variação Cambial:** Implementar um gráfico em tempo real para visualizar a variação histórica da taxa.
* **Favoritar Moedas:** Opção para salvar e selecionar rapidamente as moedas mais usadas pelo usuário.
* **Modo Escuro:** Adicionar um tema noturno (*dark mode*) com transição suave.
* **Internacionalização (i18n):** Tornar a interface compatível com diferentes idiomas.

---

## 📄 Licença

Este projeto é de código aberto e pode ser utilizado livremente para fins **educacionais e estudos**.
