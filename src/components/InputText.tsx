import React, {  Ref, useEffect, useState } from "react";
// import "./input.css";
import { useToggle } from "./hooks";
import { cn, MdIcon } from "./Common";

interface InputTextProps {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: string) => void;
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

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
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
      fieldIcon,
      mandatoryField,
      labelAlign = "justify-start",
      flexDirection = "flex-row",
      ...props
    }: InputTextProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [data, setData] = useState<string>(value || "");
    const [focus, focusfn] = useToggle();

    // --- KEEP INPUT ALWAYS IN SYNC WITH PARENT ---
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

    const handleBlur = () => {
      focusfn();
      if (onChange) {
        onChange(name, data);
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
              type="text"
              placeholder={placeholder}
              value={data}
              onChange={handleChange}
              onFocus={focusfn}
              onBlur={handleBlur}
              disabled={disabled}
              {...props}
            />
            {/* Helper Text */}
            {fieldName && (
                <label className="Text-10-400 text-Gray-600  whitespace-nowrap --field--" htmlFor={name}>
                  {data.length > 0 ? fieldName : "--"}
                </label>
            )}
            {fieldIcon}
          </div>
       
      </div>
    );
  }
);
InputText.displayName = "InputText";
