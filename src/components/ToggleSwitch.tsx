import React, { Fragment, Ref, useRef } from "react";
import "./input.css";
import { MdIcon } from "./Common";

interface ToggleSwitchProps {
  name: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  sideLabel?: boolean;
  labelA?: string;
  labelB?: string;
  value: boolean;
  onChange: (name: string, value: boolean | string) => void;
  fieldName?: string;
  mandatoryField?: any;
  icon?: React.ReactNode;
  fieldIcon?: React.ReactNode;
  labelAlign?: "justify-start" | "justify-center" | "justify-end";
  flexDirection?:
    | "flex-row"
    | "flex-col"
    | "flex-row-reverse"
    | "flex-column-reverse";
}
export const ToggleSwitch = React.forwardRef<
  HTMLInputElement,
  ToggleSwitchProps
>(
  (
    {
      name,
      className = "",
      label,
      disabled = false,
      sideLabel,
      labelA = "Off",
      labelB = "On",
      value,
      onChange,
      icon,
      fieldName,
      fieldIcon,
      mandatoryField,
      labelAlign = "justify-start",
      flexDirection = "flex-row",
    }: ToggleSwitchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const toggle = useRef<HTMLInputElement>(null); //For changing style
    const checkbox = useRef<HTMLInputElement>(null); //checkbox state
    function handleToggle() {
      if (!disabled) {
        //check disabled state
        if (onChange) {
          (toggle.current as HTMLInputElement).classList.toggle("toggled");
          const currentState = ((checkbox.current as HTMLInputElement).checked =
            !(checkbox.current as HTMLInputElement).checked);
          onChange(name, currentState);
        }
      }
    }

    return (
      <div
        ref={ref}
        className={`w-full h-full flex items-baseline justify-between bg-inherit  ${flexDirection} ${className}`}
      >
        {/* Icon - Label */}
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

        <div className="w-full h-full flex items-center justify-start gap-1">
          <input
            id={name}
            name={name}
            ref={checkbox}
            className="toggle-checkbox"
            type="checkbox"
            defaultChecked={value}
            aria-checked={value}
            // aria-labelledby={name}
            disabled={disabled}
          />
          {/* Side Label */}
          {sideLabel && (
            <label
              className="Text-14-400  text-black capitalize sidelabel "
              // aria-hidden={value}
              htmlFor={name}
            >
              {value ? labelB :labelA}
            </label>
          )}
          {/* Toggle */}
          <span
            ref={toggle}
            onClick={handleToggle}
            className={`toggle-switch  border-black  f-slidebox ${
              value ? "toggled" : ""
            }`}
          >
            <span className="toggle  bg-black mr-px f-slidecircle"></span>
          </span>

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
    );
  }
);
ToggleSwitch.displayName = "InputToggleSwitch";
