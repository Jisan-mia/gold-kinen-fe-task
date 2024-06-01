import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFirstTwoLetters = (str: string) => {
  const words = str.match(/\b\w+/g);
  if (words) {
    return words.length >= 2 ? words[0][0] + words[1][0] : words[0][0];
  } else {
    return "";
  }
};
