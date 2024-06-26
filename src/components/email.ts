import { Render } from "./shared-types";

export interface EmailProps {
  email: string;
  label: string;
}

const emailRender: Render<EmailProps> = (props) => {
  return `<a href="mailto:${props.email}">${props.label ?? props.email}</a>`;
};

export default emailRender;
