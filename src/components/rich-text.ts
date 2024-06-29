import { Render } from "./shared-types";

export interface RichTextProps {
  value: string;
}

const richTextRender: Render<RichTextProps> = (props) => {
  return `<p>${props.value}</p>`;
};

export default richTextRender;
