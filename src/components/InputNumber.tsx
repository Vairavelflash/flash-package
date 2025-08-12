import React, { Fragment, Ref, useState } from "react";
import { useToggle } from "./hooks";
import { cn, MdIcon } from "./Common";
import "./input.css";

interface InputNumberProps {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value: string | number;
  onChange: (name: string, value: boolean | string | number) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  fieldName?: string;
  mandatoryField?: any;
  fieldIcon?: React.ReactNode;
  labelAlign?: "justify-start" | "justify-center" | "justify-end";
  flexDirection?:
    | "flex-row"
    | "flex-col"
    | "flex-row-reverse"
    | "flex-column-reverse";
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
      mandatoryField,
      labelAlign = "justify-start",
      flexDirection = "flex-row",
      fieldName,
      fieldIcon,
      ...props
    }: InputNumberProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [data, setData] = useState(value);
    const [focus, focusfn] = useToggle();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setData(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };

    const handleBlur = () => {
      focusfn();
      if (onChange) {
        onChange(name, data);
      }
    };
    return (
      <div
        className={`w-full h-full flex items-center justify-between bg-inherit ${flexDirection} ${className}`}
      >
        {/* Icon - Label */}
        {icon || label ? (
          <div
            className={`w-full h-full flex items-center gap-1 justify-normal ${labelAlign} --labelbody--`}
          >
            {icon && <MdIcon>{icon}</MdIcon>}
            {label && (
              <div className="flex items-center gap-2">
                <label
                  className="Text-14-400 font-normal --label--"
                  htmlFor={name}
                >
                  {label}
                </label>
                {mandatoryField && mandatoryField}
              </div>
            )}
          </div>
        ) : null}

        <div className="w-full h-full flex flex-col gap-0.5">
          <div
            className={cn(
              "w-full h-full flex items-center border bg-inherit rounded px-2 --textbody--",
              focus && "--onFocus--"
            )}
          >
            {/* Input Text */}
            <input
              id={name}
              name={name}
              ref={ref}
              className={cn(
                "Text-14-400 text-Gray-900 min-h-[26px] h-7 w-full rounded bg-inherit  --text--"
              )}
              type="number"
              placeholder={placeholder}
              value={data}
              onChange={handleChange}
              onFocus={focusfn}
              onBlur={handleBlur}
              disabled={disabled}
              autoComplete="off"
              {...props}
            />
            {/* Helper Text */}
            {fieldName && (
              <div className="flex items-center  --field--">
                <label
                  className="Text-10-400 text-Gray-600 whitespace-nowrap"
                  htmlFor={name}
                >
                  {fieldName}
                </label>
              </div>
            )}
            {fieldIcon && <Fragment>{fieldIcon}</Fragment>}
          </div>
        </div>
      </div>
    );
  }
);
InputNumber.displayName = "InputNumber";
