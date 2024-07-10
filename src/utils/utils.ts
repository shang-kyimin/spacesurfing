import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateDate(date: string, toPlus: number) {
  const current = new Date(date);
  current.setDate(current.getDate() + toPlus);
  
  const finalDate = current.getFullYear() + "-" + numberFormatTwoDigits(current.getMonth() + 1) + "-" + numberFormatTwoDigits(current.getDate());
  return finalDate;
}

function numberFormatTwoDigits(num: number) {
  if (num < 10) {
    return "0" + num;
  }
  return String(num);
}
