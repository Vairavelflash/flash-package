import React, { Ref, useEffect, useState } from "react";
import "./input.css";
import { getFlexDirection } from "./Common";
interface InputCheckboxProps {
  name: string;
  label?: string;
  className?: string;
  value: boolean;
  onChange: (name: string, value: boolean | string) => void;
  disabled?: boolean;
  orientation?: string;
  icon?: React.ReactNode;
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
      orientation = "horizontal",
    }: InputCheckboxProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [check, setCheck] = useState<boolean>(value);

    useEffect(() => {
      setCheck(value);
    }, [value]);

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheck(e.target.checked);
      if (onChange) {
        onChange(name, e.target.checked);
      }
    };
    const flexDirection: any = getFlexDirection[orientation] || "flex-row";
    return (
      <div
        className={`w-full h-full flex items-center justify-between bg-inherit ${className}
          ${flexDirection} `}
      >
        {/* Icon - Label */}
        <div className="flex items-center gap-1 f-labelbody">
          {icon && (
            <div className="min-w-4 min-h-4 flex items-center justify-center f-icon">
              {icon}
            </div>
          )}
          <label className="Text-12-400 f-label" htmlFor={name}>
            {label}
          </label>
        </div>

        {/* Checkbox */}
        <input
          id={name}
          name={name}
          ref={ref}
          className="accent-black f-checkbox"
          type="checkbox"
          defaultChecked={check}
          onChange={handleClick}
          disabled={disabled}
        />
      </div>
    );
  }
);
Checkbox.displayName = "InputCheckbox";
