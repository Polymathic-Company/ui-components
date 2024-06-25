import { Render } from "./shared-types";

export interface PhoneProps {
  number: string;
  label: string;
}

const phoneRender: Render<PhoneProps> = (props) => {
  const cleaned = props.number.replace(/(-|\(|\))/g, "");
  var match = cleaned.match(/^(\\d{3})(\\d{3})(\\d{4})$/);
  console.log({ cleaned, match });

  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }

  return `<a href="tel:${props.number}">${props.label}</a>`;
};

export default phoneRender;
