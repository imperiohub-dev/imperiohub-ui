import styles from "./index.module.scss";
import type { UI, UINavigate } from "../../../../models/global.model";
interface CallToActionHomeProp {
  title: string;
  text: string;
  img: UI<"img">;
  cta: {
    title: string;
    navigate: UINavigate;
    cb: () => void;
  };
}
export default function CallToActionHome({
  title,
  text,
  img,
  cta,
}: CallToActionHomeProp) {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <button
        className={styles.cta}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          cta.cb?.();
        }}
      >
        {cta.title}
      </button>
    </section>
  );
}
