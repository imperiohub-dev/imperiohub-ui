import styles from "../../nav.module.scss";
import {
  defaultLinks,
  defaultBrand,
  type NavModelProps,
} from "../../../../models/nav/nav.model";
import type { JSX } from "react";

/* ========== VARIANTE 1: Minimalista ========== */
export default function NavBarMinimal({
  brand,
  links,
  htmlProps,
}: NavModelProps): JSX.Element {
  const b = brand ?? defaultBrand;
  const arrLinks = links ?? defaultLinks;

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
      </div>
    </header>
  );
}
