import "./style.css";
import emailRender from "./components/email.ts";
import phoneRender from "./components/phone-number.ts";
import currencyRender from "./components/currency.ts";
import dateRender from "./components/date.ts";
import richTextRender from "./components/rich-text.ts";

console.log(new Date());

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <div>
    ${currencyRender({ value: "2000" })}
    </div>
    <div>
    ${dateRender({ value: "Sat Jun 29 2024 02:04:02 GMT-0400" })}
    </div>
    <div>
    ${emailRender({ email: "test@test.com", label: "Email Render" })}
    </div>
    <div>
    ${phoneRender({ number: "205-515-6004", label: "Call Us!" })}
    </div>
    <div>
    ${richTextRender({ value: "Some text to render." })}
    </div>
    </div>
  </div>
`;
