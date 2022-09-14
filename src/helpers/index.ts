function classes(...args: string[]) {
	return args.join(" ");
}

const currencies = [
	"USD", "EUR", "GBP", "CNY", "JPY", "CHF", "HKD", "TRY"
] as const;

const currencyNames = {
	"USD": "Доллар США",
	"EUR": "Евро",
	"GBP": "Фунт стерлингов",
	"CHF": "Швейцарский франк",
	"CNY": "Юань",
	"JPY": "Иена",
	"HKD": "Гонконгский доллар",
	"TRY": "Турецкая лира",
};

export { classes, currencies, currencyNames };
