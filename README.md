# flash-component

A highly customizable and lightning-fast component library featuring Input Text, Number, Checkbox, Dropdown and more. Modify colors, fonts, and styles to suit your needs.

---

## 🚀 Live Demo
Try it instantly on StackBlitz:  
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-xmnvtfeu?file=src%2FApp.js)

---

## Installation

```bash
npm install flash-package
```

# Components

```


import {
  Checkbox,
  DropDown,
  InputNumber,
  InputText,
  RadioButton,
  TextArea,
  ToggleSwitch,
} from "flash-package";
import "flash-package/dist/index.css";
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    username: 'steve',
    age: 9,
    about_yourself: 'textArea',
    react: true,
    angular: false,
    gender: '',
    enable_message: true,
    country: '',
  });

  const [direction, setDirection] = useState('flex-row');
  const [labelAlign, setLabelAlign] = useState('');

  const onChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log('form values', form);

  return (
    <div className="w-full h-full flex flex-col gap-5 p-5 ">
      <button
        onClick={() => onChange('username', 'Tony Stark')}
        className="p-2 rounded border-gray-500 px-2 py-1"
      >
        Change User Name From Parent component
      </button>

      <div className="flex items-center w-full justify-between my-2">
        {['justify-start', 'justify-center', 'justify-end'].map((i) => (
          <button
            key={i}
            onClick={() => setLabelAlign(i)}
            className="border rounded border-gray-500 px-2 py-1 capitalize"
          >
            {i}
          </button>
        ))}
      </div>

      <div className="flex items-center w-full justify-between my-2">
        {['flex-col', 'flex-row', 'flex-col-reverse', 'flex-row-reverse'].map(
          (i) => (
            <button
              key={i}
              onClick={() => setDirection(i)}
              className="border rounded border-gray-500 px-2 py-1 capitalize"
            >
              {i}
            </button>
          )
        )}
      </div>

      <InputText
        name="username"
        value={form?.username}
        onChange={onChange}
        label="User Name"
        icon={'👤'}
        fieldName="Mr/Mrs"
        className="cls"
        fieldIcon={<User className="w-4 h-4 ml-1" />}
        mandatoryField={'*'}
        disabled={false}
        flexDirection={direction}
        labelAlign={labelAlign}
        placeholder="Placeholder"
      />

      <InputNumber
        name="age"
        value={form?.age}
        onChange={onChange}
        label="Age"
        icon={<Phone className="w-4 h-4" />}
        fieldName="YEARS"
        className="cls"
        fieldIcon={'🔞'}
        mandatoryField={'*'}
        disabled={false}
        flexDirection={direction}
        labelAlign={labelAlign}
        placeholder="Placeholder"
      />

      <RadioButton
        name="gender"
        value="Male"
        onChange={onChange}
        className=""
        isSelected={form?.gender === 'Male'}
        label="Male"
        fieldIcon={'🚹'}
        flexDirection={direction}
        icon={'🚹'}
        labelAlign={labelAlign}
        mandatoryField={<p className="text-red-600">*</p>}
        disabled={false}
      />
      <RadioButton
        name="gender"
        value="Female"
        onChange={onChange}
        className=""
        isSelected={form?.gender === 'Female'}
        label="Female"
        fieldIcon={'🚺'}
        flexDirection={direction}
        icon={'🚺'}
        labelAlign={labelAlign}
        mandatoryField={'*'}
        disabled={false}
      />

      <ToggleSwitch
        name="enable_message"
        onChange={onChange}
        value={form?.enable_message}
        flexDirection={direction}
        icon={'🔄️'}
        label="Enable Message"
        mandatoryField={'*'}
        sideLabel={true}
        disabled={false}
        className="cls border-b"
        offLabel="No"
        onLabel="Yes"
        labelAlign={labelAlign}
        HelperNode={<p>helper</p>}
      />

      <Checkbox
        name="react"
        onChange={onChange}
        value={form?.react}
        className="cls"
        flexDirection={direction}
        helperText={<h6 className="text-sm">Found by Facebook</h6>}
        icon={'1️⃣'}
        label="React"
        labelAlign={labelAlign}
        mandatoryField={'*'}
        disabled={false}
      />
      <Checkbox
        name="angular"
        onChange={onChange}
        value={form?.angular}
        className="cls"
        flexDirection={direction}
        helperText={<h6 className="text-sm">Found by Google</h6>}
        icon={'2️⃣'}
        label="Angular"
        labelAlign={labelAlign}
        mandatoryField={'*'}
        disabled={false}
      />

      <DropDown
        name="country"
        className=""
        placeholder="Select Any Country"
        onChange={onChange}
        value={form.country}
        options={options}
        flexDirection={direction}
        icon={'🌎'}
        label="Country"
        labelAlign={labelAlign}
        mandatoryField={'*'}
        disabled={false}
        left={150}
        top={150}
      />

      <TextArea
        name="about_yourself"
        cols={3}
        onChange={onChange}
        rows={3}
        value={form?.about_yourself}
        fieldName="FN"
        flexDirection={direction}
        icon={'📁'}
        label="About Yourself"
        labelAlign={labelAlign}
        mandatoryField={'*'}
        className="cls"
        autoWidth={true}
        disabled={false}
        placeholder="Placeholder"
      />
    </div>
  );
}

const options = [
  { value: '', label: 'Select Any' },
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3', disabled: true },
];

```
