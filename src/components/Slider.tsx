import React, { useEffect, useState } from "react";
import { getFlexDirection } from "./Common";

interface InputSliderProps {
  name: string;
  className?: string;
  label?: string;
  value: number;
  onChange?: (name: string, value: boolean | string | number) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  orientation?: string;
  min: number;
  max: number;
  step?: number;
}
export const Slider = React.forwardRef<HTMLInputElement, InputSliderProps>(
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
      min,
      max,
      step = 1,
    }: InputSliderProps,
    ref
  ) => {
    const [data, setData] = useState<number>(value);

    useEffect(() => {
      setData(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value, 10);
      console.log(newValue, "newValue");
      setData(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };
    const flexDirection: any = getFlexDirection[orientation] || "flex-row";

    return (
      <div
        className={`w-full h-full  flex items-center justify-between gap-1 f-slider  ${className}
          ${flexDirection}`}
      >
        {/* Icon - Label */}
        {(icon || label) && (
          <div className="flex items-center gap-1 w-full f-labelbody">
            {icon && (
              <div className="min-w-4 min-h-4 flex items-center justify-center f-icon">
                {icon}
              </div>
            )}

            {label ? (
              <label className="Text-12-400 font-normal --label--" htmlFor={name}>
                {label}
              </label>
            ) : null}
          </div>
        )}

        {/* Input Slider */}

        <input
          id={name}
          name={name}
          ref={ref}
          className={` h-0.5 w-full accent-[#6D6E70] f-slider `}
          type="range"
          value={data}
          onChange={handleChange}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
        />
      </div>
    );
  }
);
Slider.displayName = "Slider";
