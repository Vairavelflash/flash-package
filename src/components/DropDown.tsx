import React, { Ref, useEffect, useRef, useState } from "react";
import { useClickOutside, useDropdownPosition, useToggle } from "./hooks";
import { cn, MdIcon } from "./Common";
import "./input.css";

interface InputDropDownProps {
  name: string;
  className?: string;
  options: any;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  mandatoryField?: any;
  fieldIcon?: React.ReactNode;
  labelAlign?: "justify-start" | "justify-center" | "justify-end";
  flexDirection?:
    | "flex-row"
    | "flex-col"
    | "flex-row-reverse"
    | "flex-column-reverse";
  left?: number;
  top?: number;
}

export const DropDown = React.forwardRef<HTMLInputElement, InputDropDownProps>(
  (
    {
      name,
      className = "",
      label,
      options,
      placeholder,
      value,
      onChange,
      icon,
      disabled = false,
      // fieldName,
      // fieldIcon,
      mandatoryField,
      labelAlign = "justify-start",
      flexDirection = "flex-row",
      left = 150,
      top = 260,
      ...props
    }: InputDropDownProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [focus, focusfn] = useToggle();

    const [data, setData] = useState<string>(value);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1); // track highlighted option
    const { isAbove, isLeft, updatePosition } = useDropdownPosition(top, left);

    useClickOutside(dropdownRef, () => setShowDropdown(false), showDropdown);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setData(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };
    useEffect(() => {
      setData(value);
    }, [value]);

    const handleBlur = () => {
      focusfn();
      if (onChange) {
        onChange(name, data);
      }
    };

    const handleSelect = (data: string) => {
      if (onChange) {
        onChange(name, data);
        setShowDropdown(false);
        setHighlightedIndex(-1); // Reset highlight after selection
      }
    };

    // Handle keydown for arrow navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown") {
        setHighlightedIndex((prevIndex) =>
          prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (e.key === "ArrowUp") {
        setHighlightedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (e.key === "Enter") {
        // Select the highlighted option
        if (highlightedIndex >= 0 && highlightedIndex < options.length) {
          handleSelect(options[highlightedIndex].label);
        } else {
          setShowDropdown(true);
        }
      }
    };

    return (
      <div
        className={`w-full h-full flex items-center justify-between bg-inherit relative ${flexDirection} ${className}`}
        onKeyDown={handleKeyDown} // Attach keydown handler
      >
        {/* Icon - Label */}
        {icon || label ? (
          <div
            className={`w-full h-full flex items-center gap-1 justify-normal ${labelAlign} --labelbody--`}
          >
            {icon && <MdIcon>{icon}</MdIcon>}
            {label && (
              <div className="flex items-center gap-2">
                <label className="Text-14-400 font-normal --label--" htmlFor={name}>
                  {label}
                </label>
                {mandatoryField && mandatoryField}
              </div>
            )}
          </div>
        ) : null}

        <div
          ref={dropdownRef}
          className={cn(
            "w-full h-full flex items-center relative border bg-inherit rounded px-2 --dropDown--",
            (showDropdown || focus) && "--onFocus--"
          )}
          onClick={(e) => {
            updatePosition(e);
            if (disabled || showDropdown) {
              setShowDropdown(false);
            } else {
              setShowDropdown(true);
            }
          }}
        >
          {/* Input Text */}
          <input
            id={name}
            name={name}
            ref={ref}
            className={cn(
              "Text-14-400 text-Gray-900 min-h-[26px] h-7 w-full rounded cursor-default bg-inherit  --text--"
            )}
            type="text"
            placeholder={placeholder}
            value={data}
            onChange={handleChange}
            onFocus={focusfn}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={true}
            {...props}
          />
          <MdIcon
            className={cn(
              showDropdown ? "rotate-180 duration-200" : "rotate-0 duration-200"
            )}
          >
            <ExpandMoreIcon color="#1C1B1F" />
          </MdIcon>
          {showDropdown && (
            <div
              className={cn(
                "rounded-sm border bg-white left-0 absolute w-full max-h-40 overflow-y-auto drop-shadow-md z-50 --options--",
                isAbove ? "bottom-full" : "top-full",
                isLeft ? "right-0" : "left-0"
              )}
            >
              {options?.length > 0 ? (
                options.map((option: any, index: number) => (
                  <div
                    key={option.value}
                    className={cn(
                      "border-b Text-14-400 option",
                      data === option?.label && "bg-blue-100",
                      highlightedIndex === index && "bg-gray-100"
                    )}
                    onClick={() => {
                      handleSelect(option?.label);
                    }}
                    tabIndex={0}
                  >
                    <p className="slice">{option.label}</p>
                  </div>
                ))
              ) : (
                <div className={cn("border-b Text-14-400 option")}>
                  <p className="slice">No Data</p>
                </div>
              )}
            </div>
          )}
          {/* Helper Text */}
          {/* {fieldName && (
              <div className="flex items-center  --field--">
                <label className="Text-10-400 text-Gray-600 " htmlFor={name}>
                  {data.length > 0 ? fieldName : "--"}
                </label>
              </div>
            )}
            {fieldIcon && <Fragment>{fieldIcon}</Fragment>} */}
        </div>
      </div>
    );
  }
);
DropDown.displayName = "DropDown";

const ExpandMoreIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.99871 5.22481L0.229492 1.45561L0.848709 0.836395L3.99871 3.9864L7.14871 0.836395L7.76792 1.45561L3.99871 5.22481Z"
        fill={color}
      />
    </svg>
  );
};
