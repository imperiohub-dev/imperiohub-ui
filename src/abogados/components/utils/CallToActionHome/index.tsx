import styles from "./index.module.scss";
export default function CallToActionHome({
  title = "Defensa legal Estrategia Digital",
  text = `Combinamos experiencia legal, tradicional con un enfoque innovador para
        proteger tus intereses en el complejo mundo actual.`,
  img = {
    //img atribute
    src: "/legal.png",
    alt: "",
  },
  cta = {
    // button atribute
    title: "Agendar Consulta Gratuita",
    navigate: "/agendar.cita",
    cb: () => {},
  },
}) {
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
