import styles from "./index.module.scss";
import { type Links } from "../../../models/nav/nav.model";
/**
 * Footer
 * Props:
 * - brand: { logo?: ReactNode | string, name: string, tagline?: string }
 * - nav: { title: string, links: Array<{ label: string, href: string }> }
 * - contact: { title: string, email?: string, phone?: string, address?: string }
 * - social: { title: string, items: Array<{ name: "twitter"|"linkedin"|"facebook", href: string }> }
 * - legal: { rights: string, disclaimer?: string }
 */
/* ========= Tipos de subcomponentes ========= */

interface BrandInfo {
  logo: string; // ⚖️ o ruta de imagen
  name: string; // "Justicia Digital"
  tagline: string; // "Defendiendo tus derechos..."
}

interface NavLink extends Links {
  label: string;
  href: string;
}

interface NavSection {
  title: string; // "Navegación"
  links: NavLink[]; // [{ label, href }]
}

interface ContactInfo {
  title: string; // "Contacto"
  email: string;
  phone: string;
  address: string;
}

interface SocialItem {
  name: "twitter" | "linkedin" | "facebook" | string; // puedes ampliar más redes
  href: string;
}

interface SocialSection {
  title: string; // "Síguenos"
  items: SocialItem[];
}

interface LegalInfo {
  rights: string; // derechos reservados
  disclaimer: string; // aviso legal
}

/* ========= Tipo principal ========= */

interface FooterProps {
  brand: BrandInfo;
  nav: NavSection;
  contact: ContactInfo;
  social: SocialSection;
  legal: LegalInfo;
}

export default function Footer({
  brand,
  nav,
  contact,
  social,
  legal,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.colBrand}>
          <div className={styles.brandRow}>
            <span className={styles.brandLogo}>
              {typeof brand.logo === "string" ? brand.logo : brand.logo}
            </span>
            <span className={styles.brandName}>{brand.name}</span>
          </div>
          {brand.tagline && <p className={styles.tagline}>{brand.tagline}</p>}
        </div>

        {/* Navegación */}
        <nav className={styles.colNav} aria-label={nav.title}>
          <h3 className={styles.colTitle}>{nav.title}</h3>
          <ul className={styles.linkList}>
            {nav.links?.map((l, i) => (
              <li key={i}>
                <a className={styles.link} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacto */}
        <div className={styles.colContact}>
          <h3 className={styles.colTitle}>{contact.title}</h3>
          {contact.email && (
            <p className={styles.contactItem}>
              <a className={styles.link} href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
          )}
          {contact.phone && (
            <p className={styles.contactItem}>
              <a className={styles.link} href={`tel:${contact.phone}`}>
                {contact.phone}
              </a>
            </p>
          )}
          {contact.address && (
            <p className={styles.contactItem}>{contact.address}</p>
          )}
        </div>

        {/* Social */}
        <div className={styles.colSocial}>
          <h3 className={styles.colTitle}>{social.title}</h3>
          <div className={styles.socialRow}>
            {social.items?.map((s, i) => (
              <a
                key={i}
                className={styles.socialIcon}
                href={s.href}
                aria-label={s.name}
                target="_blank"
                rel="noreferrer"
                title={s.name}
              >
                {s.name === "twitter" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.6 1.1A4 4 0 0 0 12 8.4c0 .3 0 .6.1.9-3.3-.2-6.1-1.8-8-4.2-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.8 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.5 3.1 3.9-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.8 3.8 2.8A8 8 0 0 1 2 19.4c-.3 0-.7 0-1-.1A11.3 11.3 0 0 0 7 21c7.3 0 11.4-6 11.4-11.2v-.5c.8-.6 1.4-1.2 1.6-2z" />
                  </svg>
                )}
                {s.name === "linkedin" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5C1.02 2.4 1.9 1.5 3 1.5s1.98.9 1.98 2zM2 8h2v14H2V8zm6 0h2v2h.1c.3-.6 1.2-1.3 2.5-1.3 2.6 0 3.4 1.6 3.4 4V22h-2v-7.1c0-1.7-.6-2.8-2-2.8-1.1 0-1.8.8-2.1 1.5-.1.2-.1.5-.1.8V22H8V8z" />
                  </svg>
                )}
                {s.name === "facebook" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12.1A10 10 0 1 0 10.7 22v-7h-2.1v-2.9h2.1V9.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.4c-1.1 0-1.5.7-1.5 1.4v1.8h2.7l-.4 2.9h-2.3V22A10 10 0 0 0 22 12.1z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <hr className={styles.separator} />
        <p className={styles.rights}>{legal.rights}</p>
        {legal.disclaimer && (
          <p className={styles.disclaimer}>{legal.disclaimer}</p>
        )}
      </div>
    </footer>
  );
}
