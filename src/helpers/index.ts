function classes(...args: string[]) {
	return args.join(" ");
}

const currencies = [
	"USD", "EUR", "GBP", "CNY", "JPY", "CHF", "HKD", "TRY"
] as const;

type Currency = typeof currencies[number];

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

function formatPercent(value: number) {
	const sign = value > 0 ? "+" : "";
	return `${sign}${value.toFixed(2)}%`;
}

function formatPrice(value: number, currency: "RUB" | "USD") {
	const symbol = currency === "RUB" ? "₽" : "$";
	return `${value.toFixed(1)} ${symbol}`;
}

export { classes, currencies, currencyNames, formatPercent, formatPrice };
export type { Currency };
