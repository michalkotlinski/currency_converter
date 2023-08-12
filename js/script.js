{
	const calculateResult = (currency, amount) => {
		const rateEUR = 4.5265;
		const rateUSD = 4.2287;
		const rateCHF = 4.6193;
		const rateGBP = 5.1973;
		const rateJPY = 2.8635;
	
		switch (currency) {
			case 'USD':
				return amount / rateUSD;
			case 'EUR':
				return amount / rateEUR;
			case 'CHF':
				return amount / rateCHF;
			case 'GBP':
				return amount / rateGBP;
			case 'JPY':
				return amount / rateJPY;
		};
	};

	const resultText = (amount, currency, result) => {
		const resultElement = document.querySelector('form__converted js-result');
		resultElement.textContent = `<strong>${amount.toFixed(2)}</strong> PLN = <strong>${result.toFixed(2)}</strong> ${currency}`;
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const amountElement = document.querySelector('.js-amount');
		const amount = +amountElement.value;
		const currencyElement = document.querySelector('.js-currency');
		const currency = currencyElement.value;
		const result = calculateResult(currency, amount);

		resultText(amount, result, currency);
	};
	const init = () => {
		const formElement = document.querySelector('.js-form');

		formElement.addEventListener('submit', onFormSubmit);
	};

	init();	
}
