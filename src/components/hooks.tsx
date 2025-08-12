import { useEffect, useState, useTransition } from "react";


export function useToggle(defaultValue = false): [boolean, () => void] {
    const [value, setValue] = useState(defaultValue);
    const toggleValue = () => setValue((prevValue) => !prevValue);
    return [value, toggleValue];
  }

export const useDropdownPosition = (height : any, width : any) => {
  const [isAbove, setIsAbove] = useState(false);
  const [isLeft, setIsLeft] = useState(false);

  const updatePosition = (event : any) => {
    const buttonRect = event.target.getBoundingClientRect();
    const spaceBelow = window.innerHeight - buttonRect.bottom;
    const spaceRight = window.innerWidth - buttonRect.right;
    
    setIsAbove(spaceBelow < height); // Approximate dropdown height
    setIsLeft(spaceRight < width); // Approximate dropdown width
  };

  return { isAbove, isLeft, updatePosition };
};


export const useClickOutside = (ref: any, callback: any, active: boolean) => {
  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    if (active) {
      document.addEventListener("click", handleClick);
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback, active]);
};
