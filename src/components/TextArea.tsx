import React, { Ref, useEffect, useState } from "react";
import { getFlexDirection } from "./Common";

interface InputTextAreaProps {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  orientation?: string;
  rows: number;
  cols: number;
  helperText?: string;
}
export const TextArea = React.forwardRef<HTMLInputElement, InputTextAreaProps>(
  (
    {
      name,
      className,
      label,
      placeholder,
      value,
      onChange,
      icon,
      disabled = false,
      orientation = "horizontal",
      rows,
      cols,
      helperText,
    }: InputTextAreaProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const [data, setData] = useState<string>(value);

    useEffect(() => {
      setData(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;

      setData(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };
    const flexDirection: any = getFlexDirection[orientation] || "flex-row";
    return (
      <div
        ref={ref}
        className={`w-full h-full  flex items-center justify-between bg-inherit ${className}
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
              <label className="Text-12-400 font-normal f-label" htmlFor={name}>
                {label}
              </label>
            )}
          </div>
        ) : null}

        <div
          className={`w-full h-full flex  gap-0.5 ${flexDirection} ${
            helperText ? "items-start" : "items-center"
          } f-inputbody`}
        >
          {/* Input TextArea */}
          <textarea
            id={name}
            name={name}
            className=" Text-12-400 text-Gray-900 border-Gray-200 bg-inherit w-full border p-1 rounded f-textarea"
            placeholder={placeholder}
            value={data}
            onChange={handleChange}
            disabled={disabled}
            rows={rows}
            cols={cols}
            style={{ resize: "none" }}
          />
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
TextArea.displayName = "InputTextArea";
