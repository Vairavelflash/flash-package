import React, { Fragment, Ref } from "react";
import { cn, MdIcon } from "./Common";
import "./input.css";
interface InputRadioProps {
  name: string;
  className?: string;
  value?: string;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  label: string;
  isSelected: boolean;
  mandatoryField?: any;
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
        <div className={cn("w-full h-full flex items-center px-2 ")}>
          {/* Input Text */}
          <input
            id={value}
            name={name}
            ref={ref}
            className="bg-black accent-black --radio--"
            type="radio"
            value={value}
            onChange={handleChange}
            checked={isSelected}
            // onFocus={focusfn}
            disabled={disabled}
          />

          {fieldIcon && <Fragment>{fieldIcon}</Fragment>}
        </div>
        {/* Icon - Label */}
        {icon || label ? (
          <div
            className={`w-full h-full flex items-center gap-1 justify-normal ${labelAlign} --labelbody--`}
          >
            {icon && <MdIcon>{icon}</MdIcon>}
            {label && (
              <div className="flex items-center gap-2">
                <label
                  className="Text-14-400 whitespace-nowrapl --label--"
                  htmlFor={value}
                >
                  {label}
                </label>
                {mandatoryField && mandatoryField}
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
);
RadioButton.displayName = "RadioButton";
