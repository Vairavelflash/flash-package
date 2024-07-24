import React, { useEffect, useState } from "react";
import { getFlexDirection } from "./Common";
import './input.css'

interface InputRadioProps {
  name: string;
  helperText?: string;
  className?: string;
  value?: string;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  orientation?: string;
  disabled?: boolean;
  checked?: boolean;
}

export const RadioButton = React.forwardRef<HTMLInputElement, InputRadioProps>(
  (
    {
      name,
      helperText,
      className = "",
      value,
      onChange,
      icon,
      orientation = "horizontal",
      disabled = false,
      checked = false,
    }: InputRadioProps,
    ref
  ) => {
    const [select, setSelect] = useState<boolean>(checked);

    useEffect(() => {
      setSelect(checked);
    }, [checked]);

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelect((prev) => !prev);
      if (onChange) {
        onChange(name, e.target.value);
      }
    };

    const flexDirection: any = getFlexDirection[orientation] || "flex-row";

    return (
      <div
        className={`w-full h-full flex gap-1 ${
          helperText ? "items-start" : "items-center"
        }  bg-inherit  ${className} ${flexDirection}  `}
      >
        {/* Radio Button */}
        <input
          id={value}
          name={name}
          value={value}
          ref={ref}
          className="bg-black accent-black f-radio"
          type="radio"
          defaultChecked={select}
          onChange={handleClick}
          disabled={disabled}
        />

        {/* Icon*/}
        <div className="flex items-center gap-1 f-labelbody">
          {icon && (
            <div className="min-w-4 min-h-4 flex items-center justify-center f-icon">
              {icon}
            </div>
          )}

          {/* Label & helperText */}
          <div className="flex flex-col">
            <label
              className="Text-12-400 whitespace-nowrap f-label--"
              htmlFor={value}
            >
              {value}
            </label>
            {helperText && (
              <p className="Text-12-400  text-Gray-900 f-helpertext">
                {helperText}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);
RadioButton.displayName = "InputRadioButton";
