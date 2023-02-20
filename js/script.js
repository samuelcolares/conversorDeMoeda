// 1. Importando elementos do HTML dentro de uma função por quê decidi colocar um seletor de escolhas e aplicar o evento "change", com isso eu preciso fazer a releitura dos elementos importados do HTML para eles funcionarem corretamente.
function cacheSelectors() {
    const dolar = document.getElementById('dolar')
    const real = document.getElementById('real')
    const euro = document.getElementById('euro')
    const libra = document.getElementById('libra')
    const iene = document.getElementById('iene')
    const button = document.getElementById('button')

}

// 1.1 Importando elementos do HTML esses não precisam ser chamados novamente então ficaram no objeto window
const section = document.getElementById('currencyData')
const select = document.forms['formCurrency']['currency']
const label = document.forms['formCurrency'].firstChild.nextElementSibling

// 2. evento 'change' com método de verificação Switch, sempre que o houver mudança no select de opções, emitir no HTML de uma seção um formulário com inputs e labels e após isso, como houve mudança no HTML, chamar a função do ITEM 1. e enfim um evento de clique para o botão e dentro contendo a função promise para chamar a API
select.addEventListener('change', (e) => {
    label.innerText = 'Moeda Selecionada:'
    let selectValor = e.target.value
    switch (selectValor) {
        case 'Real':
            section.innerHTML = `
                <label for="">Dolar (USD)
                    <input type="text" name="" id="dolar" disabled>
                </label>

                <label for="" class="active" style="order: -1">Real (BRL)
                    <input type="text" name="" id="real" value="">
                </label>

                <label for="">Euro (EUR)
                    <input type="text" name="" id="euro" disabled>
                </label>
                
                <label for="">Libra Esterlina (GBP)
                    <input type="text" name="" id="libra" disabled>
                </label>

                <label for="">Iene (JPY)
                    <input type="text" name="" id="iene" disabled>
                </label>

                <button id="button">Converter</button>
            `
            cacheSelectors()
            button.onclick = () => {
                convert(realAPI, currencyBRL, real.value)
            }
            break;
        case 'Dolar':
            section.innerHTML = `
                <label for="" class="active" style="order: -1">Dolar (USD)
                    <input type="text" name="" id="dolar">
                </label>

                <label for="">Real (BRL)
                    <input type="text" name="" id="real" value="" disabled>
                </label>

                <label for="">Euro (EUR)
                    <input type="text" name="" id="euro" disabled>
                </label>
                
                <label for="">Libra Esterlina (GBP)
                    <input type="text" name="" id="libra" disabled>
                </label>

                <label for="">Iene (JPY)
                    <input type="text" name="" id="iene" disabled>
                </label>

                <button id="button">Converter</button>
            `
            cacheSelectors()
            button.onclick = () => {
                convert(dolarAPI, currencyUSD, dolar.value)
            }
            break;
        case 'Euro':
            section.innerHTML = `
            <label for="">Real (BRL)
                <input type="text" name="" id="real" value="" disabled>
            </label>

            <label for="">Dolar (USD)
                <input type="text" name="" id="dolar" disabled>
            </label>
    
            <label for="" class="active" style="order: -1">Euro (EUR)
                <input type="text" name="" id="euro">
            </label>
            
            <label for="">Libra Esterlina (GBP)
                <input type="text" name="" id="libra" disabled>
            </label>
    
            <label for="">Iene (JPY)
                <input type="text" name="" id="iene" disabled>
            </label>
    
            <button id="button">Converter</button>
            `
            cacheSelectors()
            button.onclick = () => {
                convert(euroAPI, currencyEUR, euro.value)
            }
            break;
        case 'Iene':
            section.innerHTML = `
            <label for="">Dolar (USD)
                <input type="text" name="" id="dolar" disabled>
            </label>

            <label for="">Real (BRL)
                <input type="text" name="" id="real" value="" disabled>
            </label>

            <label for="">Euro (EUR)
                <input type="text" name="" id="euro" disabled>
            </label>
            
            <label for="">Libra Esterlina (GBP)
                <input type="text" name="" id="libra" disabled>
            </label>

            <label for="" class="active" style="order: -1">Iene (JPY)
                <input type="text" name="" id="iene">
            </label>

            <button id="button">Converter</button>
        `
            cacheSelectors()
            button.onclick = () => {
                convert(ieneAPI, currencyJPY, iene.value)
            }
            break;
        case 'Libra':
            section.innerHTML = `
            <label for="">Dolar (USD)
                <input type="text" name="" id="dolar" disabled>
            </label>

            <label for="">Real (BRL)
                <input type="text" name="" id="real" value="" disabled>
            </label>

            <label for="">Euro (EUR)
                <input type="text" name="" id="euro" disabled>
            </label>
            
            <label for="" class="active" style="order: -1">Libra Esterlina (GBP)
                <input type="text" name="" id="libra">
            </label>

            <label for="">Iene (JPY)
                <input type="text" name="" id="iene" disabled>
            </label>

            <button id="button">Converter</button>
        `
            cacheSelectors()
            button.onclick = () => {
                convert(libraAPI, currencyGBP, libra.value)
            }
            break;
    }
})

// 3. Importação da API com fetch Promise.

// 3.1 Atribuição de variáveis para enviar como parâmetro da função que recebe a fetch promise
const dolarAPI = `https://api.freecurrencyapi.com/v1/latest?apikey=kSgG33O2dtg2zCZc6hax48j0UkqwtHO5LJmWPID9&currencies=BRL%2CEUR%2CGBP%2CJPY`
const realAPI = 'https://api.freecurrencyapi.com/v1/latest?apikey=kSgG33O2dtg2zCZc6hax48j0UkqwtHO5LJmWPID9&currencies=USD%2CEUR%2CJPY%2CGBP&base_currency=BRL'
const euroAPI = 'https://api.freecurrencyapi.com/v1/latest?apikey=kSgG33O2dtg2zCZc6hax48j0UkqwtHO5LJmWPID9&currencies=USD%2CBRL%2CJPY%2CGBP&base_currency=EUR'
const libraAPI = 'https://api.freecurrencyapi.com/v1/latest?apikey=kSgG33O2dtg2zCZc6hax48j0UkqwtHO5LJmWPID9&currencies=USD%2CBRL%2CJPY%2CEUR&base_currency=GBP'
const ieneAPI = 'https://api.freecurrencyapi.com/v1/latest?apikey=kSgG33O2dtg2zCZc6hax48j0UkqwtHO5LJmWPID9&currencies=USD%2CBRL%2CEUR%2CGBP&base_currency=JPY'


// 3.2 Função de chamar a API, recebendo três parametros, o primeiro sendo o ITEM 3.1, o segundo o ITEM 3.3 e o terceiro recebe o valor do input 
function convert(api, currencyChange, currencyValue) {
    fetch(api)
        .then(parseJSON)
        // 3.2.1 a função fetch promise pode receber infinitos 'then', porém apenas uma função dentro do then. então uma arrow function para servir de callback com 1 parâmetro que será passado para a função de dentro com o método call assim como o parâmetro do valor do input
        .then((response) => currencyChange.call(this, response, currencyValue))
        .catch(exibirError)
}

// 3.3 funções para pegar os dados da API e fazer a conta de câmbio de moedas.
function currencyBRL(response, BRL) {
    let moeda = parseFloat(BRL)
    let apiResponse = response.data
    dolar.value = `$ ${parseFloat(moeda * apiResponse.USD).toFixed(2)}`
    euro.value = `€ ${parseFloat((moeda * apiResponse.EUR).toFixed(2))}`
    libra.value = `£ ${parseFloat((moeda * apiResponse.GBP).toFixed(2))}`
    iene.value = `¥ ${parseFloat((moeda * apiResponse.JPY).toFixed(2))}`
}

function currencyUSD(response, USD) {
    let moeda = parseFloat(USD)
    let apiResponse = response.data
    real.value = `R$ ${parseFloat(moeda * apiResponse.BRL).toFixed(2)}`
    euro.value = `€ ${parseFloat((moeda * apiResponse.EUR).toFixed(2))}`
    libra.value = `£ ${parseFloat((moeda * apiResponse.GBP).toFixed(2))}`
    iene.value = `¥ ${parseFloat((moeda * apiResponse.JPY).toFixed(2))}`
}

function currencyEUR(response, EUR) {
    let moeda = parseFloat(EUR)
    let apiResponse = response.data
    real.value = `R$ ${parseFloat(moeda * apiResponse.BRL).toFixed(2)}`
    dolar.value = `$ ${parseFloat((moeda * apiResponse.USD).toFixed(2))}`
    libra.value = `£ ${parseFloat((moeda * apiResponse.GBP).toFixed(2))}`
    iene.value = `¥ ${parseFloat((moeda * apiResponse.JPY).toFixed(2))}`
}

function currencyGBP(response, GBP) {
    let moeda = parseFloat(GBP)
    let apiResponse = response.data
    real.value = `R$ ${parseFloat(moeda * apiResponse.BRL).toFixed(2)}`
    dolar.value = `$ ${parseFloat((moeda * apiResponse.USD).toFixed(2))}`
    euro.value = `£ ${parseFloat((moeda * apiResponse.EUR).toFixed(2))}`
    iene.value = `¥ ${parseFloat((moeda * apiResponse.JPY).toFixed(2))}`
}

function currencyJPY(response, JPY) {
    let moeda = parseFloat(JPY)
    let apiResponse = response.data
    real.value = `R$ ${parseFloat(moeda * apiResponse.BRL).toFixed(2)}`
    dolar.value = `$ ${parseFloat((moeda * apiResponse.USD).toFixed(2))}`
    euro.value = `£ ${parseFloat((moeda * apiResponse.EUR).toFixed(2))}`
    libra.value = `¥ ${parseFloat((moeda * apiResponse.GBP).toFixed(2))}`
}

function parseJSON(response) {
    return response.json()
}

function exibirError() {
    alert('error')
}