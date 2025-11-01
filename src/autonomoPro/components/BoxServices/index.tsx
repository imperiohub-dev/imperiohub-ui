import styles from "./index.module.scss";
import type { UI } from "../../../models/global.model";
interface BoxServices {
  title: string;
  text: string;
  cta: string;
  img: UI<"img">;
}
type BoxServicesProp = {
  services: BoxServices[];
};
export default function BoxServices({ services }: BoxServicesProp) {
  return (
    <section className={styles.container}>
      {services.map(({ title, text, cta, img }, inx) => (
        <div key={inx} className={styles.container__item}>
          <div className={styles.container__item_title}>
            <img src={img.src} alt={img.alt} />
            <h3>{title}</h3>
          </div>
          <p>{text}</p>
          <button>{cta}</button>
        </div>
      ))}
    </section>
  );
}
