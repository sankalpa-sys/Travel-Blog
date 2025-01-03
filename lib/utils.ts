import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date | number): string{
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short', // Abbreviated month (e.g., 'Jan')
    day: 'numeric',
  });
}

export const truncateText = (text: string, maxLength: number = 330): string => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};
export function calculateReadingTime(charCount: number): number {
  const words = charCount / 6; // Estimate words from characters
  const minutes = words / 200; // Average reading speed in words per minute
  return Math.ceil(minutes); // Round up to the nearest minute
}
