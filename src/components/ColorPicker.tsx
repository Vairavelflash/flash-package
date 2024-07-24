import React, {  useEffect, useRef, useState } from "react";
import { getFlexDirection } from "./Common";
import "./input.css";


interface InputColorProps {
  name: string;
  className?: string;
  label?: string;
  value: string | number;
  onChange?: (name: string, value: boolean | string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  orientation?: string;
  defaultDiv?: React.ReactElement;
}
export const ColorPicker = React.forwardRef<HTMLInputElement, InputColorProps>(
  (
    {
      name,
      className = "",
      label,
      value,
      onChange,
      icon,
      disabled = false,
      orientation = "horizontal",
      defaultDiv,
    }: InputColorProps,
    ref
  ) => {
    const [data, setData] = useState(value);

    useEffect(() => {
      setData(value);
    }, [value]);

    const [timeoutId, setTimeoutId] = useState<any>(null);
    const reff = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      // Clear previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        setData(newValue);
        if (onChange) {
          onChange(name, newValue);
        }
      }, 500);
      setTimeoutId(newTimeoutId);
    };
    const ColorIconClick = () => {
      reff?.current?.click();
    };
    const flexDirection: any = getFlexDirection[orientation] || "flex-row";
    return (
      <div
        className={`w-full h-full  flex items-center justify-between bg-inherit ${className}
          ${flexDirection} `}
      >
        {/* Icon - Label */}
        {icon || label ? (
          <div className="w-full h-full flex items-center gap-1  f-labelbody">
            {icon && (
              <div className="min-w-4 min-h-4 flex items-center justify-center f-icon">
                {icon}
              </div>
            )}
            {label && (
              <label className="Text-12-400 font-normal f-label" htmlFor={name}>
                {label}
              </label>
            )}
          </div>
        ) : null}

        {/* Input color */}

        <div className="w-4 h-4 relative  rounded f-color" ref={ref}>
          {!data ? (
            <div className="min-w-4 min-h-4" onClick={ColorIconClick}>{defaultDiv}</div>
          ) : (
            <div
              onClick={ColorIconClick}
              style={{ backgroundColor: `${data}` }}
              className={`w-4 h-4 rounded border  `}
            ></div>
          )}
          <input
            id={name}
            name={name}
            ref={reff}
            className={`w-4 h-4 Text-12-400 border-Gray-200 border py-1 px-1 rounded `}
            type="color"
            value={data}
            onChange={handleChange}
            style={{ visibility: "hidden", position: "absolute" }}
            disabled={disabled}
          />
        </div>
      </div>
    );
  }
);
ColorPicker.displayName = "ColorPicker";
