import {
  type NavBarSegmentedProps,
  defaultBrand,
} from "../../../../models/nav/nav.model";
import styles from "../../nav.module.scss";
import type { JSX } from "react";

/* ========== VARIANTE 3: Segmentada, con CTA ========== */
export default function NavBarSegmented({
  brand,
  buttonText1,
  buttonText2,
  links,
  htmlProps,
}: NavBarSegmentedProps): JSX.Element {
  const b = brand ?? defaultBrand;
  const arrLinks = links ?? [
    { label: "Estrategias", href: "#estrategias" },
    { label: "Mercados", href: "#mercados" },
    { label: "Reportes", href: "#reportes" },
  ];

  const brandHref = b.href ?? defaultBrand.href ?? "/";
  const brandAlt = b.img?.alt ?? defaultBrand.img?.alt ?? b.title ?? "logo";

  return (
    <header className={styles.father} {...htmlProps?.header}>
      <div className={styles["nav__inner"]} {...htmlProps?.headerDiv}>
        <a
          className={styles["nav__brand"]}
          href={brandHref}
          {...htmlProps?.headerDivA}
        >
          <span className={styles["nav__logo"]} {...htmlProps?.headerDivASpan}>
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
        </a>

        <nav {...htmlProps?.headerDivNav}>
          {arrLinks.map(({ label, href, ...ctx }) => (
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
          <button type="button" {...htmlProps?.headerDivDivButton1}>
            {buttonText1 || "Ingresar"}
          </button>
          <button type="button" {...htmlProps?.headerDivDivButton2}>
            {buttonText2 || "Probar gratis"}
          </button>
        </div>
      </div>
    </header>
  );
}
