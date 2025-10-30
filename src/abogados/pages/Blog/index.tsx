import styles from "./index.module.scss";
import FirstTitle from "../../components/utils/FirstTitle";
import BoxBlog from "../../components/BoxBlog";
export default function Blog() {
  return (
    <section className={styles.blog}>
      <FirstTitle
        title="Nuestro Blog Jurídico"
        text={`Artículos y análisis para mantenerte informado sobre el cambiante panorama legal.`}
      />
      <BoxBlog
        blogs={[
          {
            autor: "Juan Pérez",
            date: "Oct 10, 2025",
            title: "5 Claves para un Contrato Comercial Sólido",
            description:
              "Asegura tus negocios con estos consejos esenciales antes de firmar cualquier contrato comercial.",
            cta: "Leer más",
            onClick: () => {},
          },
          {
            autor: "Ana Gómez",
            date: "Sep 28, 2025",
            title: "Análisis de la Nueva Reforma a la Ley de Alquileres",
            description:
              "¿Cómo te afecta la última reforma? Te lo explicamos de manera sencilla y directa.",
            cta: "Leer más",
            onClick: () => {},
          },
          {
            autor: "Juan Pérez",
            date: "Sep 15, 2025",
            title: "La Importancia de la Defensa Penal en la Era Digital",
            description:
              "Delitos informáticos y pruebas digitales: un nuevo campo de batalla legal que debes conocer.",
            cta: "Leer más",
            onClick: () => {},
          },
        ]}
      />
    </section>
  );
}
