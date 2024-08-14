import React, { Fragment, Ref, useEffect, useRef, useState } from "react";
import './input.css'
interface ServersIconProps {
  color?: string;
}

interface InputDropDownProps {
  name: string;
  label?: string;
  options: any;
  value: string;
  onChange: (name: string, value: boolean | string) => void;
  className?: string;
  disabled?: boolean;
  slice?: number;
  Lefticon?: React.ReactNode;
  Righticon?: React.ReactNode;
}
export const Dropdown = React.forwardRef<HTMLInputElement, InputDropDownProps>(
  (
    {
      name,
      label,
      options,
      value,
      onChange,
      className = "",
      disabled = false,
      slice = 10,
      Lefticon,
      Righticon,
    }: InputDropDownProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    const handleSelect = (data: string) => {
      if (!disabled && onChange) {
        onChange(name, data);
        setIsOpen(false);
      }
    };

    useEffect(() => {
      // If user clicks outside, close the DropDown
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div
        ref={dropdownRef}
        className={` w-full h-full flex items-center justify-between ${className}`}
      >
        {/* Icon - Label */}
        {Lefticon || label ? (
          <div className="w-1/2 h-full flex items-center gap-1  f-labelbody">
            {Lefticon && <Fragment>{Lefticon}</Fragment>}
            {label && (
              <label className="Text-12-400 font-normal f-label" htmlFor={name}>
                {label}
              </label>
            )}
          </div>
        ) : null}

        {/* DropDown  */}
        <div
          className={` ${
            label ? "w-1/2 " : "w-full"
          } h-full flex flex-row gap-1 relative f-dropDown`}
          onClick={handleClick}
          ref={ref}
        >
          <div className="flex flex-row items-center justify-between rounded-sm  w-full h-7 px-2 py-1.5 gap-1 border  bg-Gray-200 f-textbody">
            <p className="Text-12-400  slice">
              {value.length > slice ? value.slice(0, slice) + "..." : value}
            </p>

            <div
              className={`min-w-4 min-h-4 flex items-center justify-center f-icon ${
                isOpen ? "rotate-180 duration-200" : "rotate-0 duration-200"
              }`}
            >
              <ExpandMoreIcon color="#1C1B1F" />
            </div>
          </div>
          {Righticon && <Fragment>{Righticon}</Fragment>}
          {/* DropDown items */}
          {isOpen && (
            <div className="rounded-sm border bg-white top-full absolute w-full drop-shadow-md f-options z-[1]">
              {options.map((option: any) => (
                <div
                  key={option.value}
                  className="option border-b Text-12-400"
                  onClick={(e) => {
                    e.stopPropagation(); //Stop Calling other onClick events
                    handleSelect(option?.label);
                  }}
                >
                  <p className="slice f-optionLabel">{option.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Dropdown.displayName = "InputDropdown";

export const ExpandMoreIcon: React.FC<ServersIconProps> = ({ color }) => {
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
