import styles from "./index.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  defaultLinks,
  defaultBrand,
  type NavModelProps,
} from "../../../../models/nav/nav.model";
import handleNavigate from "../../../../utils/handleNavigate";
import useDevice from "../../../../hooks/useDevice";
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isPhone, isTablet, isPc } = useDevice();

  const menuMobil = (isPhone || isTablet) && isMenuOpen;

  // agregar un dvg a la derecha para que sea ciqueable
  // mostrar lista que salga de la derecha solo si estan en isPhone
  return (
    <header className={styles.header} {...htmlProps?.header}>
      <div className={styles.header_container} {...htmlProps?.headerDiv}>
        <a
          className={styles.header_container_title}
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

        {!isPhone && !isTablet && (
          <>
            <nav
              className={styles.header_container_nav}
              {...htmlProps?.headerDivNav}
            >
              {arrLinks.map(
                ({ label, navigate: navigat, onClick: cb, ...ctx }, inx) => (
                  <a
                    key={inx}
                    className={styles.header_container_nav__item}
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
          </>
        )}
        <div className={styles.header_container_btn_container}>
          <button className={styles.header_container_btn}>
            Contacto Urgente
          </button>
          {(isPhone || isTablet) && !isMenuOpen && (
            <div className={styles.mobileMenu}>
              <button
                className={styles.menuButton}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                ☰
              </button>
            </div>
          )}
          {isMenuOpen && (
            <nav className={styles.header_container_nav_mobil}>
              {arrLinks.map(
                ({ label, navigate: navigat, onClick: cb, ...ctx }, inx) => (
                  <a
                    key={inx}
                    className={styles.header_container_nav__item_mobil}
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
              <div
                className={styles.isMenuOpen}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                X
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
