import styles from "./index.module.scss";
export default function CallToActionList({
  title = "¿Por qué elegirnos?",
  text = `Nuestra firma se basa en tres pilares 
  fundamentales para garantizar el mejor resultado para ti.`,
  ctas = [
    {
      // button atribute
      title: "Servicios Legales",
      text: `Explora nuestras áreas de práctica y descubre cómo podemos 
      ayudarte a resolver tus problemas legales con eficacia.`,
      img: {
        //img atribute
        src: "../../../../assets/svg/SVG_balance_24.svg",
        alt: "",
      },
      navigate: "/servicios",
      cta: "Ver Servicios",
      onClick: () => {},
    },
    {
      // button atribute
      title: "Blog Jurídico",
      text: `Mantente informado con nuestros análisis 
      sobre las últimas novedades legales y consejos prácticos.`,
      img: {
        //img atribute
        src: "../../../../assets/svg/SVG_balance_24.svg",
        alt: "",
      },
      navigate: "/blog",
      cta: "Leer Blog",
      cb: () => {},
    },
    {
      // button atribute
      title: "Agendar Cita",
      text: `¿Listo para dar el siguiente paso? Agenda una cita de 
      forma rápida y sencilla a través de nuestro portal.`,
      img: {
        //img atribute
        src: "../../../../assets/svg/SVG_balance_24.svg",
        alt: "",
      },
      navigate: "/agendar-cita",
      cta: "Agendar ahora",
      cb: () => {},
    },
  ],
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.section_ctas}>
        {ctas.map(({ title, text, img, navigate, cta, onClick: cb }, inx) => {
          return (
            <div key={inx} className={styles.section_ctas_items}>
              <img src={img.src} alt={img.alt} />
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#">{cta}</a>
            </div>
          );
        })}
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
