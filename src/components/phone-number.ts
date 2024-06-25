import { Render } from "./shared-types";

export interface PhoneProps {
  number: string;
  label?: string;
}

const phoneRender: Render<PhoneProps> = (props) => {
  const cleaned = props.number.replace(/(-|\(|\))/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  let formattedNumber: string = props.number;

  if (match) {
    formattedNumber = `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return `<a href="tel:${formattedNumber}">${
    props.label ?? formattedNumber
  }</a>`;
};

export default phoneRender;
