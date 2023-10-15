import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSizeName(value: string) {
  switch (value) {
    case "us5":
      return "US 5"
    case "us5_5":
      return "US 5.5"
    case "us6":
      return "US 6"  
    case "us6_5":
      return "US 6.5"
    case "us7":
      return "US 7"
    case "us7_5":
      return "US 7.5"
    case "us8":
      return "US 8"
    case "us8_5":
      return "US 8.5"
    case "us9":
      return "US 9"
    case "us9_5":
      return "US 9.5"
    case "us10":
      return "US 10"
    case "us10_5":
      return "US 10.5"
  }
}
