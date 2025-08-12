import React, { Fragment, Ref, useEffect, useState } from "react";
import { MdIcon } from "./Common";
import "./input.css";

interface InputCheckboxProps {
  name: string;
  label?: string;
  className?: string;
  value: boolean;
  onChange: (name: string, value: boolean | string) => void;
  disabled?: boolean;
  icon?: any;
  mandatoryField?: any;
  helperText?: any;
  labelAlign?: "justify-start" | "justify-center" | "justify-end";
  flexDirection?:
    | "flex-row"
    | "flex-col"
    | "flex-row-reverse"
    | "flex-column-reverse";
}

export const Checkbox = React.forwardRef<HTMLInputElement, InputCheckboxProps>(
  (
    {
      name,
      label,
      className = "",
      value = false,
      onChange,
      icon,
      disabled = false,
      mandatoryField,
      helperText,
      labelAlign = "justify-start",
      flexDirection = "flex-row",
      ...props
    }: InputCheckboxProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [check, setCheck] = useState<boolean>(value);
    useEffect(() => {
      setCheck(value);
    }, [value]);

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      const checkValue = e.target.checked;
      setCheck(checkValue);
      if (onChange) {
        onChange(name, checkValue);
      }
    };

    return (
      <div
        className={`w-full h-full flex items-baseline justify-between bg-inherit  ${flexDirection} ${className}`}
      >
        {/* Icon - Label */}
        {icon || label ? (
          <div
            className={`w-full h-full flex items-center gap-1 ${labelAlign} --labelbody--`}
          >
            {icon && <MdIcon>{icon}</MdIcon>}
            {label && (
              <div className="flex items-center gap-2">
                <label className="Text-14-400 font-normal --label--" htmlFor={name}>
                  {label}
                </label>
                {mandatoryField && mandatoryField}
              </div>
            )}
            {helperText && <Fragment>{helperText}</Fragment>}
          </div>
        ) : null}
        <input
          id={name}
          name={name}
          ref={ref}
          className="accent-black  --checkbox--"
          type="checkbox"
          defaultChecked={check}
          checked={check}
          onChange={handleClick}
          disabled={disabled}
          {...props}
        />
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
