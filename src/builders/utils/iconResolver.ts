/**
 * Icon Resolver Utility
 *
 * Converts icon name strings to actual Lucide icon components
 */

import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

/**
 * Resolves an icon name string to a Lucide icon component
 *
 * @param iconName - Name of the Lucide icon (e.g., "CheckCircle", "Heart")
 * @returns Lucide icon component or null if not found
 *
 * @example
 * ```tsx
 * const CheckIcon = resolveIcon('CheckCircle');
 * if (CheckIcon) {
 *   return <CheckIcon size={24} />;
 * }
 * ```
 */
export function resolveIcon(iconName: string): LucideIcon | null {
  if (!iconName) return null;

  // Try exact match
  if (iconName in LucideIcons) {
    return (LucideIcons as any)[iconName] as LucideIcon;
  }

  // Try with capitalized first letter
  const capitalized = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  if (capitalized in LucideIcons) {
    return (LucideIcons as any)[capitalized] as LucideIcon;
  }

  // Try common variations
  const variations = [
    iconName.replace(/-/g, ''),
    iconName.replace(/_/g, ''),
    iconName.replace(/\s/g, ''),
  ];

  for (const variation of variations) {
    if (variation in LucideIcons) {
      return (LucideIcons as any)[variation] as LucideIcon;
    }
  }

  console.warn(`Icon "${iconName}" not found in Lucide icons`);
  return null;
}

/**
 * Gets a list of all available icon names
 */
export function getAvailableIcons(): string[] {
  return Object.keys(LucideIcons).filter(
    (key) => typeof (LucideIcons as any)[key] === 'function'
  );
}

/**
 * Validates if an icon name exists
 */
export function isValidIcon(iconName: string): boolean {
  return resolveIcon(iconName) !== null;
}
