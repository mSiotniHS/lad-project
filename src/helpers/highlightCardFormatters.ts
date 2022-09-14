import { Props } from "../components/HighlightCard";
import { ExchangeRate } from "../store/slices/exchangeRatesSlice";
import { Index } from "../store/slices/indexesSlice";
import { Currency, currencyNames, formatPercent, formatPrice } from "./index";

function formatExchangeRate(currency: Currency, size: Props["size"], rate?: ExchangeRate): Props {
	const title = currencyNames[currency];
	const subtitle = currency;

	let mainText: string;
	let footnote: string;

	if (rate) {
		mainText = `${rate?.price?.toFixed(1)} ₽`;
		footnote = `${formatPercent(rate?.dayChange) ?? "?"} за день`;
	} else {
		mainText = "Загрузка...";
		footnote = "";
	}

	return {title, subtitle, mainText, footnote, size};
}

function formatIndex(indexName: string, index: Index): Props {
	console.log(indexName, index);

	const title = indexName;
	const mainText = formatPrice(index.price, index.currency);
	const footnote
		= index.dayChange
		? `${formatPercent(index.dayChange!)} за день`
		: undefined;

	return {title, mainText, footnote, size: "large"};
}

export { formatExchangeRate, formatIndex };