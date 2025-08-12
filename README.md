# flash-component

A highly customizable and lightning-fast component library featuring Input Text, Number, Checkbox, Dropdown and more. Modify colors, fonts, and styles to suit your needs.



## Installation

```bash
npm install flash-package
```

# Components

```

import {
  Checkbox,
  Dropdown,
  InputNumber,
  InputText,
  RadioButton,
  TextArea,
  ToggleSwitch,
} from "flash-package";
import { useState } from "react";

const options = [
  { value: "Option 1", label: "Always Off" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
];

export default function App() {
const [form, setForm] = useState({
    username: "dd",
    number: 9,
    radio: "",
    toggle: true,
    checkbox: true,
    dropDown: "",
    textarea: "textAreaaaa",
  });
  const onChange = (name: string, value: string | boolean | number) => {
    setForm((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="w-[100%] h-[100%]">
    <InputText
          name="username"
          value={form?.username}
          onChange={onChange}
          label="User Name"
          icon={<Icon1 />}
          fieldName="FN"
          className="cls"
          fieldIcon={<Icon2 />}
          mandatoryField={"*"}
          disabled={false}
          flexDirection="flex-row"
          labelAlign="justify-start"
          placeholder="Placeholder"
        />

         <InputNumber
          name="number"
          value={form?.number}
          onChange={onChange}
          label="Text"
          icon={<Icon />}
          fieldName="FN"
          className="cls"
          fieldIcon={<Icon />}
          mandatoryField={"*"}
          disabled={false}
          flexDirection="flex-row"
          labelAlign="justify-start"
          placeholder="Placeholder"
        />

         <RadioButton
          name="radioGroup"
          value="High"
          onChange={onChange}
          className=""
          isSelected={form?.radioGroup === "High"}
          label="High"
          fieldIcon={<Icon />}
          flexDirection="flex-row"
          icon={<Icon />}
          labelAlign="justify-start"
          mandatoryField={"#"}
          disabled={false}

        />
        <RadioButton
          name="radioGroup"
          value="Low"
          onChange={onChange}
          className=""
          isSelected={form?.radioGroup === "Low"}
          label="Low"
          fieldIcon={<Icon />}
          flexDirection="flex-row"
          icon={<Icon />}
          labelAlign="justify-start"
          mandatoryField={"#"}
          disabled={false}

        />

         <ToggleSwitch
          name="switch"
          onChange={onChange}
          value={form?.switch}
          fieldIcon={<Icon />}
          fieldName="Fn"
          flexDirection="flex-row"
          icon={<Icon />}
          label="Label"
          mandatoryField={"%"}
          sideLabel={true}
          disabled={false}
          className="cls"
          labelA="Yes"
          labelB="No"
          labelAlign="justify-start"
        />


         <Checkbox
          name="veg"
          onChange={onChange}
          value={form?.veg}
          className="cls"
          flexDirection="flex-row"
          helperText={"cool"}
          icon={<Icon />}
          label="Label"
          labelAlign="justify-start"
          mandatoryField={"#"}
          disabled={false}
          
        />

        <DropDown
          name="min"
          className=""
          placeholder="mins"
          onChange={onChange}
          value={form.min}
          options={option}
          flexDirection="flex-row"
          icon={<Icon/>}
          label="Label"
          labelAlign="justify-start"
          mandatoryField={"*"}
          disabled={false}
          left={150}
          top={250}
        />


         <TextArea
          name="textarea"
          cols={3}
          onChange={onChange}
          rows={3}
          value={form?.textarea}
          fieldIcon={<Icon />}
          fieldName="FN"
          flexDirection="flex-row"
          icon={<Icon />}
          label="Label"
          labelAlign="justify-start"
          mandatoryField={"#"}
          className="cls"
          autoWidth={true}
          disabled={false}
          placeholder="Placeholder"
        />
        
    </div>
  )

}
```
