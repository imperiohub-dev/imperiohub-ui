import type { ReactNode } from "react";
import type { UI } from "../global.model";

export const defaultBrand = {
  title: "imperiohub",
  href: "#",
  img: { src: "https://i.pravatar.cc/64?img=5", alt: "Logo" },
};

export const defaultLinks = [
  { label: "Inicio", href: "#" },
  { label: "Productos", href: "#" },
  { label: "Precios", href: "#" },
  { label: "Contacto", href: "#" },
];

interface HtmlPropsType {
  header?: UI<"header">; // props extra para el <header>
  headerDiv?: UI<"div">; // props extra para el <div> interno
  headerDivA?: UI<"a">; // props extra para el <a> dentro del <div>
  headerDivASpan?: UI<"span">; // props extra para el <span> dentro del <a>
  headerDivASpanImg?: UI<"img">; // props extra para el <img> dentro del <span>
  headerDivNav?: UI<"nav">; // props extra para el <nav> dentro del <div>
}

interface HtmlPropsTypeSearch extends HtmlPropsType {
  headerDivDiv?: UI<"div">; // props extra para el <div> dentro del <div>
  headerDivDivForm?: UI<"form">; // props extra para el <form> dentro del <div>
  headerDivDivFormInput?: UI<"input">; // props extra para el <input> dentro del <form></form>
  headerDivDivA?: UI<"a">; // props extra para el <a> dentro del <div>
  headerDivDivAImg?: UI<"img">; // props extra para el <img> dentro del <a>
}

interface HtmlPropsTypeSegmented extends HtmlPropsType {
  headerDivDiv?: UI<"div">;
  headerDivDivButton1?: UI<"button">;
  headerDivDivButton2?: UI<"button">;
}
export interface NavModelProps {
  // “Relleno rápido”
  brand: {
    title: string; // texto de marca visible
    href?: string; // destino del brand
    // Logo: o pasas src/alt, o pasas un ReactNode custom (ícono, SVG, etc.)
    img: UI<"img">; //
    node?: ReactNode;
  };
  // Enlaces del menú
  links: UI<"a">[];
  // Props para personalizar elementos internos
  htmlProps?: HtmlPropsType;
}
export interface NavModelSearchProps extends NavModelProps {
  src: string | ReactNode;
  placeholder: string;
  htmlProps?: HtmlPropsTypeSearch;
}

export interface NavBarSegmentedProps extends NavModelProps {
  buttonText1: string;
  buttonText2: string;
  htmlProps?: HtmlPropsTypeSegmented;
}
