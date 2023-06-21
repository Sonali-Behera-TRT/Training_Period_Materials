const fromSelect = document.querySelector(`[name = "from_currency"]`);
const toSelect = document.querySelector(`[name = "to_currency"]`);
const endPoint = 'https://api.apilayer.com/exchangerates_data/convert';
const inputArea = document.querySelector('[name="from_amount"]');
const formArea = document.querySelector('form');
const resultContainer = document.querySelector('.to_amount');
const loader = document.querySelector('.loader');

const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
};

function generateOptions(options) {
    return Object.entries(options).map(([currencyCode, currencyName]) => {
        return `<option>${currencyCode} - ${currencyName}</option>`;
    }).join(' ');
}

async function convertRates(fromCurrency, toCurrency, amount){
    const response = await fetch(
        `${endPoint}?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, 
        {
            headers: {
                apikey: process.env.get(API_KEY),
            }
        }
    );
    const data = await response.json();
    return data;
}

async function handleEvent(el){
    el.preventDefault();
    const fromRate = fromSelect.value.slice(0, 3);
    const toRate = toSelect.value.slice(0, 3);
    const amount = inputArea.value;

    loader.classList.remove('hidden');
    const data = await convertRates(fromRate, toRate, amount);
    resultContainer.textContent = `${toRate} ${data.result}`;
    loader.classList.add('hidden');
}

inputArea.addEventListener('input', handleEvent);

fromSelect.addEventListener('change', handleEvent);
toSelect.addEventListener('change', handleEvent);

const optionHTML = generateOptions(currencies);
fromSelect.innerHTML = optionHTML;
toSelect.innerHTML = optionHTML;