import "./style.css";
import { setupCounter } from "./counter.ts";
import emailRender from "./components/email.ts";
import phoneRender from "./components/phone-number.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    ${emailRender({ email: "test@test.com", label: "An Email" })}
    ${phoneRender({ number: "2055156004", label: "A Phone Number" })}
    ${phoneRender({ number: "(205)5156004", label: "A Phone Number" })}
    ${phoneRender({ number: "205-515-6004", label: "A Phone Number" })}
    ${phoneRender({ number: "(205)515-6004", label: "A Phone Number" })}
    ${emailRender({ email: "test@test.com", label: "An Email" })}
    ${emailRender({ email: "test@test.com", label: "An Email" })}
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
