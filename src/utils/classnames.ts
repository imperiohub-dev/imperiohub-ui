/**
 * ClassName Utility
 *
 * Simple utility for conditionally joining classNames
 */

export type ClassValue = string | number | boolean | undefined | null | ClassValue[];

export const cn = (...classes: ClassValue[]): string => {
  const result: string[] = [];

  classes.forEach((cls) => {
    if (!cls) return;

    if (typeof cls === 'string' || typeof cls === 'number') {
      result.push(String(cls));
    } else if (Array.isArray(cls)) {
      const inner = cn(...cls);
      if (inner) result.push(inner);
    }
  });

  return result.join(' ');
};
