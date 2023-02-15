// 1. Importando elementos do HTML
function cacheSelectors() {
    const dolar = document.getElementById('dolar')
    const real = document.getElementById('real')
    const euro = document.getElementById('euro')
    const libra = document.getElementById('libra')
    const iene = document.getElementById('iene')
    const button = document.getElementById('button')

}

cacheSelectors()

const section = document.getElementById('currencyData')
const select = document.forms['formCurrency']['currency']
const label = document.forms['formCurrency'].firstChild.nextElementSibling


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


const dolarAPI = `https://api.freecurrencyapi.com/v1/latest?apikey=kSgG33O2dtg2zCZc6hax48j0UkqwtHO5LJmWPID9&currencies=BRL%2CEUR%2CGBP%2CJPY`
const realAPI = 'https://api.freecurrencyapi.com/v1/latest?apikey=kSgG33O2dtg2zCZc6hax48j0UkqwtHO5LJmWPID9&currencies=USD%2CEUR%2CJPY%2CGBP&base_currency=BRL'
const euroAPI = 'https://api.freecurrencyapi.com/v1/latest?apikey=kSgG33O2dtg2zCZc6hax48j0UkqwtHO5LJmWPID9&currencies=USD%2CBRL%2CJPY%2CGBP&base_currency=EUR'
const libraAPI = 'https://api.freecurrencyapi.com/v1/latest?apikey=kSgG33O2dtg2zCZc6hax48j0UkqwtHO5LJmWPID9&currencies=USD%2CBRL%2CJPY%2CEUR&base_currency=GBP'
const ieneAPI = 'https://api.freecurrencyapi.com/v1/latest?apikey=kSgG33O2dtg2zCZc6hax48j0UkqwtHO5LJmWPID9&currencies=USD%2CBRL%2CEUR%2CGBP&base_currency=JPY'


// 2. Função de chamar a API
function convert(api, currencyChange, currencyValue) {
    const self = this
    fetch(api)
        .then(parseJSON)
        .then(function (response) {
            currencyChange.call(self, response, currencyValue);
        })
        .catch(exibirError)
}

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