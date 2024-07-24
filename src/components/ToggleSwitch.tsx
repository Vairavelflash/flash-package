import React, { Ref, useRef } from "react";
import { getFlexDirection } from "./Common";
import './input.css'

interface ToggleSwitchProps {
    name: string;
    className?: string;
    labelText?: string;
    disabled?: boolean;
    sideLabel?: boolean;
    labelA?: string;
    labelB?: string;
    value: boolean;
    onChange: (name: string, value: boolean | string) => void;
    orientation?: string;
  }
  export const ToggleSwitch = React.forwardRef<
    HTMLInputElement,
    ToggleSwitchProps
  >(
    (
      {
        name,
        className = "",
        labelText,
        disabled = false,
        sideLabel,
        labelA = "Off",
        labelB = "On",
        value,
        onChange,
        orientation = "horizontal",
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
  
      const flexDirection: any = getFlexDirection[orientation] || "flex";
      return (
        <div
          className={`flex items-center w-full h-full gap-1 ${className} ${flexDirection}`}
          ref={ref}
        >
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
  
          <div className="w-full h-full flex flex-row items-center justify-between f-toggle ">
            {/* Top Label */}
            {labelText && (
              <p className="Text-12-400  text-black f-label ">{labelText}</p>
            )}
            {/* Side Label */}
            {sideLabel && (
              <label
                className="Text-12-400  text-black f-sidelabel"
                // aria-hidden={value}
                htmlFor={name}
              >
                {value ? labelA : labelB}
              </label>
            )}
  
            {/* Toggle */}
            <span
              ref={toggle}
              onClick={handleToggle}
              className={`toggle-switch  border-black  f-slidebox ${
                value ? "toggled":''
              }`}
            >
              <span className="toggle  bg-black mr-px f-slidecircle"></span>
            </span>
          </div>
        </div>
      );
    }
  );
  ToggleSwitch.displayName = "InputToggleSwitch";