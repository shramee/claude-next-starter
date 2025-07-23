import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// Utility for conditional rendering
export function when<T>(condition: boolean, value: T): T | null {
	return condition ? value : null
}

// Utility for formatting dates
export function formatDate(date: Date | string): string {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(new Date(date))
}

// Utility for truncating text
export function truncate(str: string, length: number): string {
	return str.length > length ? str.slice(0, length) + '...' : str
}

// Utility for capitalizing first letter
export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1)
}
