import { Render } from "./shared-types";

export interface DateProps {
  value: string;
}

const dateRender: Render<DateProps> = (props) => {
  const date = new Date(props.value);
  const formattedDate = new Intl.DateTimeFormat("en-US").format(date);

  return `<p>${formattedDate}</p>`;
};

export default dateRender;
