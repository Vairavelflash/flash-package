import React, { Ref, useEffect, useState } from "react";
import { getFlexDirection } from "./Common";
import "./input.css";
interface InputNumberProps {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value: string | number;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  fieldName?: string;
  orientation?: string;
  helperText?: string;
}
export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
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
      helperText,
    }: InputNumberProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [data, setData] = useState(value);
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
        className={`w-full h-full  flex items-center  bg-inherit ${className}
          ${flexDirection} `}
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
              <label
                className="Text-12-400 text-Gray-900  f-label"
                htmlFor={name}
              >
                {label}
              </label>
            )}
          </div>
        ) : null}
        <div
          className={`w-full h-full flex  gap-0.5 ${flexDirection} ${
            fieldName ? "items-start" : "items-center"
          } f-inputbody`}
        >
          <div
            className={` w-full h-full flex items-center px-2 border rounded f-number ${
              isFocused ? "--onFocus--" : ""
            }`}
          >
            {/* Input Number */}
            <input
              id={name}
              name={name}
              ref={ref}
              className=" Text-12-400 text-Gray-1000 rounded bg-inherit min-h-[26px] w-full"
              type="number"
              placeholder={placeholder}
              value={data}
              onChange={handleChange}
              onFocus={handleOnFocus}
              onBlur={handleBlur}
              disabled={disabled}
            />
            {/* Helper Text */}
            {fieldName && (
              <div className="flex items-center f-field">
                <label className="Text-10 text-Gray-600 " htmlFor={name}>
                  {fieldName}
                </label>
              </div>
            )}
          </div>
          {helperText && (
            <div className="f-helpertext">
              <p className="Text-12-400  text-Gray-900 ">{helperText}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);
InputNumber.displayName = "InputNumber";
