import "./style.css";
import emailRender from "./components/email.ts";
import phoneRender from "./components/phone-number.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <div>
    ${emailRender({ email: "test@test.com", label: "An Email" })}
    </div>
    <div>
    ${phoneRender({ number: "2055156004" })}
    </div>
    <div>
    ${phoneRender({ number: "(205)5156004" })}
    </div>
    <div>
    ${phoneRender({ number: "205-515-6004" })}
    </div>
    <div>
    ${phoneRender({ number: "(205)515-6004" })}
    </div>
    <div>
    ${emailRender({ email: "test@test.com", label: "An Email" })}
    </div>
    <div>
    ${emailRender({ email: "test@test.com", label: "An Email" })}
    </div>
  </div>
`;
