import type { JSX } from "react";
import styles from "../../nav.module.scss";
import {
  type NavModelSearchProps,
  defaultBrand,
} from "../../../../models/nav/nav.model";

/* ========== VARIANTE 2: Centrada, con buscador ========== */
export default function NavBarSearch({
  brand,
  src: mySrc,
  placeholder: myPlaceholder,
  links,
  htmlProps,
}: NavModelSearchProps): JSX.Element {
  const b = brand ?? defaultBrand;
  const arrLinks = links ?? [
    { label: "Docs", href: "#docs" },
    { label: "Comunidad", href: "#comunidad" },
    { label: "Recursos", href: "#recursos" },
  ];

  const brandHref = b.href ?? defaultBrand.href ?? "/";
  const brandAlt = b.img?.alt ?? defaultBrand.img?.alt ?? b.title ?? "logo";

  return (
    <header className={styles.father} {...htmlProps?.header}>
      <div {...htmlProps?.headerDiv}>
        <a href={brandHref} {...htmlProps?.headerDivA}>
          <span {...htmlProps?.headerDivASpan}>
            {b?.node ? (
              <>{b.node}</>
            ) : (
              <img
                src={b?.img?.src ?? defaultBrand.img.src}
                alt={brandAlt}
                {...htmlProps?.headerDivASpanImg}
              />
            )}
          </span>
          {b?.title ?? defaultBrand.title}
        </a>

        <nav {...htmlProps?.headerDivNav}>
          {arrLinks.map(({ href, label, ...ctx }) => (
            <a
              key={href ?? String(label)}
              href={href}
              className={styles["nav__item"]}
              {...ctx}
            >
              {label}
            </a>
          ))}
        </nav>

        <div {...htmlProps?.headerDivDiv}>
          <form {...htmlProps?.headerDivDivForm}>
            <input
              placeholder={
                myPlaceholder ||
                htmlProps?.headerDivDivFormInput?.placeholder ||
                "Buscar..."
              }
              {...htmlProps?.headerDivDivFormInput}
            />
          </form>
          <a href="#" aria-label="Perfil" {...htmlProps?.headerDivDivA}>
            <img
              src={`${mySrc}`}
              alt={b?.title ?? "avatar"}
              {...htmlProps?.headerDivDivAImg}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
