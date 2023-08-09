const formElement = document.querySelector('.js-form')
const exchangeElement = document.querySelector('.js-exchange')
const convertedElement = document.querySelector('.js-converted')
const currencyElement = document.querySelector('.js-currency')

let rateEUR = 4.52
let rateUSD = 4.22
let rateCHF = 4.6193
let rateGBP = 5.1973
let rateJPY = 2.8635

formElement.addEventListener('submit', event => {
	event.preventDefault()

	const currency = +currencyElement.value
	const exchange = exchangeElement.value
	let converted

	switch (exchange) {
		case 'USD':
			converted = currency / rateUSD
			break
		case 'EUR':
			converted = currency / rateEUR
			break
		case 'CHF':
			converted = currency / rateCHF
			break
		case 'GBP':
			converted = currency / rateGBP
			break
		case 'JPY':
			converted = currency / rateJPY
			break
	}

	convertedElement.innerHTML = `<strong>${currency.toFixed(
		2
	)}</strong> PLN to <strong>${converted.toFixed(2)}</strong> ${exchange}`
})
