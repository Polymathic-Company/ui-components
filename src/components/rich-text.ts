import { Render } from "./shared-types";

export interface RichTextProps {
  text: string;
}

const richTextRender: Render<RichTextProps> = (props) => {
  return `<p>${props.text}</p>`;
};

export default richTextRender;
