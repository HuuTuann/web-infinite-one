import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { SelectOption } from "@/components";
import { Content } from "@/hooks";

/**
 * Merges Tailwind class names, resolving any conflicts.
 *
 * @param inputs - An array of class names to merge.
 * @returns A string of merged and optimized class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function isEmpty(value: unknown): boolean {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0)
  );
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);
}

export function convertToOptions(content?: Content[]): SelectOption[] {
  if (!content) return [];

  return content.map(({ name, id }) => ({
    label: name,
    value: id,
  }));
}
