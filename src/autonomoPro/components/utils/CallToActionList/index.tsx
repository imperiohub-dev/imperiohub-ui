import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import type { UI, UINavigate } from "../../../../models/global.model";
import handleNavigate from "../../../../utils/handleNavigate";
type Cta = {
  title: string;
  text: string;
  img: UI<"img">;
  navigate: UINavigate;
  cta: string;
  onClick: () => void;
};
interface CallToActionListProps {
  title: string;
  text: string;
  ctas: Cta[];
}
export default function CallToActionList({
  title,
  text,
  ctas,
}: CallToActionListProps) {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.section_ctas}>
        {ctas.map(
          ({ title, text, img, navigate: target, cta, onClick: cb }, inx) => {
            return (
              <div key={inx} className={styles.section_ctas_items}>
                <img src={img.src} alt={img.alt} />
                <h3>{title}</h3>
                <p>{text}</p>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigate(navigate, target);
                  }}
                >
                  {cta}
                </a>
              </div>
            );
          }
        )}
      </div>
      {/* <button
        className={styles.cta}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          ctas[0].cb?.();
        }}
      >
        {ctas[0].title}
      </button> */}
    </section>
  );
}
