import { Render } from "./shared-types";

export interface CurrencyProps {
  value: string | number;
}

const currencyRender: Render<CurrencyProps> = (props) => {
  const castToNumber = Number(props.value);

  if (Number.isNaN(castToNumber)) {
    return "<p>Invalide Number</p>";
  } else {
    const formattedValue = new Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
    }).format(castToNumber);
    return `<p>${formattedValue}</p>`;
  }
};

export default currencyRender;
