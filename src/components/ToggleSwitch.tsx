import React, { Ref } from "react";

import { cn, MdIcon } from "./Common";

interface ToggleSwitchProps {
  name: string;
  label?: string;
  value: boolean;
  onChange: (name: string, value: boolean | string) => void;
  className?: string;
  disabled?: boolean;

  onLabel?: string;
  offLabel?: string;

  icon?: React.ReactNode;
  HelperNode?: React.ReactNode;
  sideLabel?: boolean;

  fieldName?: string;
  mandatoryField?: React.ReactNode;

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
      label,
      value = false,
      onChange,
      className = "",
      disabled = false,

      onLabel = "Off",
      offLabel = "On",
      sideLabel,

      icon,
      HelperNode,
      mandatoryField,
      labelAlign = "justify-start",
      flexDirection = "flex-row",
    }: ToggleSwitchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const id: string = `${name}-toggle`;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange(name, e.target.checked);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onChange(name, !value);
      }
    };

    return (
      <div
        className={`w-full h-full flex items-baseline justify-between bg-inherit  ${flexDirection} ${className}`}
      >
        {/* Icon - Label */}
        {icon || label ? (
          <div
            className={`w-full h-full flex items-center gap-1 justify-normal ${labelAlign} --labelbody--`}
          >
            <label
              className="flex items-center gap-2 Text-14-400 font-normal cursor-pointer select-none --label--"
              htmlFor={id}
            >
              {icon && <MdIcon>{icon}</MdIcon>}
              {label}
            </label>
            {mandatoryField}
          </div>
        ) : null}

        <div className="w-full h-full flex items-center justify-start gap-1  --component-body--">
          {/* Custom switch */}
          <input
            ref={ref}
            id={id}
            name={name}
            type="checkbox"
            checked={value}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only peer"
            aria-checked={value}
          />

          {/* Side Label */}
          {sideLabel && (
            <label
              className="Text-14-400  text-black capitalize whitespace-nowrap sidelabel "
              htmlFor={id}
            >
              {value ? onLabel : offLabel}
            </label>
          )}

          {/* Toggle */}
          <button
            role="switch"
            disabled={disabled}
            onClick={() => !disabled && onChange(name, !value)}
            onKeyDown={handleKeyDown}
            tabIndex={disabled ? -1 : 0}
            className={cn(
              "toggle-switch  border-black   f-slidebox ",
              value && "toggled",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <span className="toggle  bg-black mr-px f-slidecircle"></span>
          </button>

          {/* Helper Text */}
          {HelperNode}
        </div>
      </div>
    );
  }
);
ToggleSwitch.displayName = "InputToggleSwitch";
