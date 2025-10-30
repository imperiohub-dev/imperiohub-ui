import type { JSX, ReactNode } from "react";
import { type To, type NavigateFunction } from "react-router-dom";

import React from "react";

export enum THEME {
  MINIMAL = "minimal",
  CLASSIC = "classic",
  GLASS = "glass",
}
type PropsOf<T extends keyof JSX.IntrinsicElements> = React.ComponentProps<T>;

type ExtraPropsMap = {
  a: { label: string; href: string }; // <a> requiere 'label' (texto visible)
  img: { src: string | ReactNode }; // <img> requiere 'src' (fuente de la imagen)
  input: { placeholder: string }; // <input> requiere 'placeholder'
  // button: { type: string }; // <button> requiere type
};

export type UI<T extends keyof JSX.IntrinsicElements> = PropsOf<T> &
  (T extends keyof ExtraPropsMap ? ExtraPropsMap[T] : object);

export type UINavigate = To | ((navigate: NavigateFunction) => void);
