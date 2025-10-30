import type { NavigateFunction } from "react-router-dom";
import type { UINavigate } from "../models/global.model";

/**
 * Maneja la navegación flexible del sistema.
 * Soporta tanto un string (ruta), un número (historial)
 * como una función callback que recibe navigate.
 */
export default function handleNavigate(
  nav: NavigateFunction,
  target?: UINavigate
): void {
  if (!target) return;

  if (typeof target === "string" || typeof target === "number") {
    nav(target);
  } else if (typeof target === "function") {
    target(nav);
  }
}
