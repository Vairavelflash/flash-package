import React, { Ref, useEffect, useState } from "react";
import { getFlexDirection } from "./Common";
import './input.css'
//common alignment object

interface InputTextProps {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  fieldName?: string;
  orientation?: string;
}
export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      name,
      className = "",
      label,
      placeholder,
      value,
      onChange,
      icon,
      disabled = false,
      fieldName,
      orientation = "horizontal",
    }: InputTextProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [data, setData] = useState<string>(value);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      setData(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setData(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };
    const handleOnFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };
    const flexDirection: any = getFlexDirection[orientation] || "flex-row";

    return (
      <div
        className={`w-full h-full flex items-center justify-between bg-inherit ${className} ${flexDirection}`}
      >
        {/* Icon - Label */}
        {icon || label ? (
          <div className="w-full h-full flex items-center gap-1  f-labelbody">
            {icon && (
              <div className="min-w-4 min-h-4 flex items-center justify-center f-icon">
                {icon}
              </div>
            )}
            {label && (
              <label className="Text-12-400 font-normal f-label" htmlFor={name}>
                {label}
              </label>
            )}
          </div>
        ) : null}

        <div
          className={` w-full h-full flex items-center border rounded f-textbody ${
            isFocused ? "--onFocus--" : ""
          }`}
        >
          {/* Input Text */}
          <input
            id={name}
            name={name}
            ref={ref}
            className="text-[14px] leading-5 font-normal text-Gray-900 min-h-[26px] w-full rounded bg-inherit pl-2 f-text"
            type="text"
            placeholder={placeholder}
            value={data}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleBlur}
            disabled={disabled}
          />
          {/* Helper Text */}
          {fieldName && (
            <div className="flex items-center  f-field">
              <label className="Text-10 text-Gray-600 " htmlFor={name}>
                {data.length > 0 ? fieldName : "--"}
              </label>
            </div>
          )}
        </div>
      </div>
    );
  }
);
InputText.displayName = "InputText";
