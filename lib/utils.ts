import { type ClassValue, clsx } from "clsx"
import { Resend } from "resend";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getResendInstance = () => {
  return new Resend(process.env.RESEND_API_KEY);
};

export const getAppDomain = () => {
  return process.env.NEXT_PUBLIC_APP_URL;
};