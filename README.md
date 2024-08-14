# flash-component

A highly customizable and lightning-fast component library featuring Input Text, Number, Checkbox, Dropdown, Color Picker, and more. Modify colors, fonts, and styles to suit your needs.

# Components

InputText: A customizable text input component with placeholder, label, and icon support.
InputNumber: A number input field for numeric data, with customizable label, icon, and helper text.
RadioButton: An elegant radio button for selection, customizable orientation and icons.
ToggleSwitch: A toggle switch for enabling or disabling options, with customizable labels and icons.
Checkbox: A flexible checkbox input with customizable label, icons, and orientation.
Dropdown: A select dropdown with support for icons and multiple options.
TextArea: A text area for multi-line input, customizable rows, columns, and labels.
ColorPicker: A color picker component to choose colors with icon and customizable label.
Slider: A customizable range slider with step intervals and labels.

## Installation

```bash
npm install flash-component
```

# Components

```
import {
  Checkbox,
  ColorPicker,
  Dropdown,
  InputNumber,
  InputText,
  RadioButton,
  Slider,
  TextArea,
  ToggleSwitch,
} from "flash-package";
import "flash-package/dist/index.css";
import { useState } from "react";

const options = [
  { value: "Option 1", label: "Always Off" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
];

export default function App() {
const [form, setForm] = useState({
    text: "dd",
    number: 9,
    radio: "radio1",
    toggle: true,
    checkbox: true,
    dropDown: "",
    textarea: "textAreaaaa",
    color: "#000000",
    slider: 2,
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
          name="username"   //Required
          value={form?.username}  //Required
          onChange={onChange} //Required
          label="Username"
          placeholder="Username"
          className="textClassName"   //To Target CSS class
          fieldName="fmt"
          orientation="vertical"   //vertical | horizontal | horizontal_reverse | vertical_reverse
          helperText="help text"  
          disabled={false}
          icon={<Icon />}
          // ref={}
        />

         <InputNumber
          name="number"   //Required
          value={form?.number}    //Required
          onChange={onChange}   //Required
          label="Number"
          fieldName="num"
          icon={<Icon />}
          placeholder="place"
          orientation="vertical"
          className="numberClassName"   
          disabled={false}
          helperText="help text"
          // ref={}
        />
         <RadioButton
          name="radio" //Required
          onChange={onChange}   //Required
          orientation="horizontal"
          helperText="helpertext"
          icon={<Icon />}
          value="radio1"
          isSelected={form?.radio === "radio1"}   //Required
          label="Yes, the survey was conducted"
          className="radioClassName"
          disabled={false}
          // ref={}
        />
         <RadioButton
          name="radio"
          onChange={onChange}
          orientation="horizontal"
          helperText="helpertext"
          icon={<Icon />}
          value="radio2"
          isSelected={form?.radio === "radio2"}
          label="Yes, the survey was conducted"
          className="radioClassName"
          disabled={false}
          // ref={}
        />
         <ToggleSwitch
          name="toggle"   //Required
          labelText="LPR Detection"
          onChange={onChange}   //Required
          value={form?.toggle}    //Required
          className="toogleSwitchClassName"
          labelA="ENABLE"
          labelB="DISABLE"
          sideLabel={true}
          disabled={false}
          // ref={}
        />
         <Checkbox
          name="checkbox"   //Required
          onChange={onChange}   //Required
          value={form?.checkbox}  //Required
          label="CHeckBox"
          icon={<Icon />}
          orientation="vertical"
          disabled={false}
          className="checkboxClassName"
          // ref={}
        />
        <Dropdown
          name="dropDown"     //Required
          value={form?.dropDown}     //Required
          options={options}     //Required
          label="Alert with sound"
          onChange={onChange}     //Required
          Lefticon={<Icon />}
          Righticon={<Icon />}
          slice={10}
          className="dropdownClassName"
          disabled={false}
          // ref={}
        />
        <TextArea
          name="textarea"   //Required
          onChange={onChange}   //Required
          value={form?.textarea}    //Required
          label="Textarea label"
          cols={3}    //Required
          rows={3}    //Required
          icon={<Icon />}
          placeholder="place"
          orientation="vertical"
          className="textareaClass"
          disabled={false}
          helperText="helper text"
          // ref={}
        />
         <ColorPicker
          name="color"    //Required
          value={form?.color}   //Required
          icon={<Icon />}
          label="color picker"
          onChange={onChange}   //Required
          orientation=""
          defaultDiv={<p>color pic</p>}
          className="colorPickerClassName"
          disabled={false}
          // ref={}
        />
        <Slider
          name="slider"   //Required
          value={form?.slider}    //Required
          label="Slider Label"
          max={10}  //Required
          min={0}   //Required
          icon={<Icon />}
          onChange={onChange}   //Required
          step={2}
          orientation="vertical"
          className="sliderClassName"
          disabled={false}
          // ref={}
        />
    </div>
  )

}
```
