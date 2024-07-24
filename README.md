# flash-component

A highly customizable and lightning-fast component library featuring Input Text, Number, Checkbox, Dropdown, Color Picker, and more. Modify colors, fonts, and styles to suit your needs.

## Installation

```bash
npm install flash-component
```

# Components

InputText

```bash
import { InputText } from 'flash-component';
import "flash-package/dist/index.css";

function Example() {
  const [form, setForm] = useState({ text: "" });

  const onChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <InputText
      name="text"
      value={form.text}
      onChange={onChange}
      label="Text Input"
      fieldName="text"
      icon="icon"
      orientation="vertical"
      placeholder="Enter text"
    />
  );
}
```

InputNumber

```bash
import { InputNumber } from 'flash-component';
import "flash-package/dist/index.css";

function Example() {
  const [form, setForm] = useState({ number: 0 });

  const onChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <InputNumber
      name="number"
      value={form.number}
      onChange={onChange}
      label="Number Input"
      fieldName="number"
      icon="icon"
      orientation="vertical"
      placeholder="Enter number"
    />
  );
}
```

Checkbox

```bash
import { Checkbox } from 'flash-component';
import "flash-package/dist/index.css";

function Example() {
  const [form, setForm] = useState({ checkbox: false });

  const onChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Checkbox
      name="checkbox"
      value={form.checkbox}
      onChange={onChange}
      label="Checkbox"
      icon="icon"
      orientation="vertical"
    />
  );
}
```

Dropdown

```bash
import { Dropdown } from 'flash-component';
import "flash-package/dist/index.css";

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

function Example() {
  const [form, setForm] = useState({ dropDown: '' });

  const onChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Dropdown
      name="dropDown"
      value={form.dropDown}
      options={options}
      label="Dropdown"
      onChange={onChange}
      Lefticon={<p>Licon</p>}
      Righticon={<p>Ricon</p>}
      slice={10}
    />
  );
}
```

ColorPicker

```bash
import { ColorPicker } from 'flash-component';
import "flash-package/dist/index.css";

function Example() {
  const [form, setForm] = useState({ color: '#000000' });

  const onChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <ColorPicker
      name="color"
      value={form.color}
      icon="icon"
      label="Color Picker"
      onChange={onChange}
      defaultDiv={<p>color pic</p>}
    />
  );
}
```

Slider

```bash
import { Slider } from 'flash-component';
import "flash-package/dist/index.css";

function Example() {
  const [form, setForm] = useState({ slider: 2 });

  const onChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Slider
      name="slider"
      value={form.slider}
      label="Slider"
      max={10}
      min={0}
      icon="icon"
      onChange={onChange}
      step={2}
      orientation="vertical"
    />
  );
}
```

Links for create a npm package for publishing

1. https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca
2. https://www.hungrimind.com/articles/packaging-react-typescript
