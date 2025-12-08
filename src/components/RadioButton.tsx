import React, { Ref } from "react";
import { cn, MdIcon } from "./Common";
import "./input.css";
interface InputRadioProps {
  name: string;
  className?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  label: string;
  isSelected: boolean;
  mandatoryField?: React.ReactNode;
  fieldIcon?: React.ReactNode;
  labelAlign?: "justify-start" | "justify-center" | "justify-end";
  flexDirection?:
    | "flex-row"
    | "flex-col"
    | "flex-row-reverse"
    | "flex-column-reverse";
}

export const RadioButton = React.forwardRef<HTMLInputElement, InputRadioProps>(
  (
    {
      name,
      className = "",
      label,
      value,
      onChange,
      icon,
      disabled = false,
      fieldIcon,
      mandatoryField,
      labelAlign = "justify-start",
      flexDirection = "flex-row",
      isSelected = false,
    }: InputRadioProps,
    ref: Ref<HTMLInputElement>
  ) => {
    // const [focus, focusfn] = useToggle();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (onChange) {
        onChange(name, newValue);
      }
    };

    return (
      <div
        className={`w-full h-full flex items-baseline justify-between bg-inherit  ${flexDirection} ${className}`}
      >
        {/* Icon - Label */}
        <div
          className={`w-full h-full flex items-center gap-1 justify-normal ${labelAlign} --labelbody--`}
        >
          <label htmlFor={value} className="flex items-center gap-1">
            {icon && <MdIcon>{icon}</MdIcon>}
            {label && (
              <p className="Text-14-400 whitespace-nowrap --label--">{label}</p>
            )}
          </label>
          {mandatoryField}
        </div>

        <div className={cn("w-full h-full flex items-center gap-1")}>
          {/* Input Text */}
          <input
            id={value}
            name={name}
            ref={ref}
            className="bg-black accent-black hover:bg-gray-700  --radio--"
            type="radio"
            value={value}
            onChange={handleChange}
            checked={isSelected}
            // onFocus={focusfn}
            disabled={disabled}
          />

          {fieldIcon}
        </div>
      </div>
    );
  }
);
RadioButton.displayName = "RadioButton";
