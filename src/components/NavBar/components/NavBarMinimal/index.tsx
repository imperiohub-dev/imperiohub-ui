import styles from "../../nav.module.scss";
import { useNavigate } from "react-router-dom";
import handleNavigate from "../../../../utils/handleNavigate";
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
  const navigate = useNavigate();
  const b = brand ?? defaultBrand;
  const arrLinks = links ?? defaultLinks;
  const brandCallBack = b?.onClick;

  return (
    <header className={styles.father} {...htmlProps?.header}>
      <div {...htmlProps?.headerDiv}>
        <a
          {...htmlProps?.headerDivA}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            brandCallBack?.();
            handleNavigate(navigate, brand?.navigate);
          }}
        >
          <span {...htmlProps?.headerDivASpan}>
            {b?.node ? (
              <>{b.node}</>
            ) : (
              <img
                src={b?.img?.src ?? defaultBrand.img.src}
                alt={b.img?.alt ?? defaultBrand.img?.alt}
                {...htmlProps?.headerDivASpanImg}
              />
            )}
          </span>
          {b?.title ?? defaultBrand.title}
        </a>

        <nav {...htmlProps?.headerDivNav}>
          {arrLinks.map(
            ({ label, navigate: navigat, onClick: cb, ...ctx }, inx) => (
              <a
                key={inx}
                className={styles["nav__item"]}
                onClick={() => {
                  cb?.();
                  handleNavigate(navigate, navigat);
                }}
                {...ctx}
              >
                {label}
              </a>
            )
          )}
        </nav>

        <button>Contacto Urgente</button>
      </div>
    </header>
  );
}
