import React, { Ref, useState } from "react";
import { useToggle } from "./hooks";
import { cn, MdIcon } from "./Common";
import "./input.css";

interface InputTextAreaProps {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  rows: number;
  cols: number;
  fieldName?: string;
  mandatoryField?: any;
  fieldIcon?: React.ReactNode;
  autoWidth?: boolean;
  labelAlign?: "justify-start" | "justify-center" | "justify-end";
  flexDirection?:
    | "flex-row"
    | "flex-col"
    | "flex-row-reverse"
    | "flex-column-reverse";
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
      rows,
      cols,
      fieldName,
      fieldIcon,
      mandatoryField,
      autoWidth = false,
      labelAlign = "justify-start",
      flexDirection = "flex-row",
      ...props
    }: InputTextAreaProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const [data, setData] = useState<string>(value);
    const [focus, focusfn] = useToggle();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        ref={ref}
        className={`w-full h-full flex items-baseline justify-between bg-inherit  ${flexDirection} ${className}`}
      >
        {/* Icon - Label */}
        {icon || label ? (
          <div
            className={`w-full h-full flex items-baseline gap-1 justify-normal ${labelAlign} --labelbody--`}
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
          // className={` w-full h-full flex items-center border rounded p-2 --textbody-- ${
          //   focus && "--onFocus--"
          // }`}
          className={cn("w-full h-full flex items-center border rounded p-2 --textbody--",focus && "--onFocus--", autoWidth && "textArea-autowidth")}
        >
          {/* Input TextArea */}
          <textarea
            id={name}
            name={name}
            className=" Text-14-400 text-Gray-900  bg-inherit w-full --textarea--"
            placeholder={placeholder}
            value={data}
            onChange={handleChange}
            onFocus={focusfn}
            onBlur={handleBlur}
            disabled={disabled}
            rows={rows}
            cols={cols}
            style={{ resize: "none" }}
            {...props}
          />
        </div>
      </div>
    );
  }
);
TextArea.displayName = "InputTextArea";
