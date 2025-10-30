import styles from "./index.module.scss";
import FirstTitle from "../../components/utils/FirstTitle";
import BoxServices from "../../components/BoxServices";
import SVG_balance_26_gold from "../../../assets/svg/SVG_balance_26_gold.svg";

export default function Services() {
  return (
    <section className={styles.services}>
      <>
        <FirstTitle
          title={"Nuestros Servicios Legales"}
          text={`Ofrecemos una amplia gama de servicios legales 
  con un enfoque en la excelencia y resultados para nuestros clientes.`}
        />
        <BoxServices
          services={[
            {
              title: "Derecho Corporativo",
              text: `Asesoramiento integral para empresas, desde la 
      constitución hasta fusiones y adquisiciones.`,
              cta: "Contratar servicio",
              img: {
                src: SVG_balance_26_gold,
                alt: "",
              },
            },
            {
              title: "Derecho Inmobiliario",
              text: `Expertos en transacciones de bienes raíces, arrendamientos, 
      y litigios de propiedad.`,
              cta: "Contratar servicio",
              img: {
                src: SVG_balance_26_gold,
                alt: "",
              },
            },
            {
              title: "Defensa Penal",
              text: `Defensa estratégica y rigurosa para proteger 
      tus derechos y tu libertad.`,
              cta: "Contratar servicio",
              img: {
                src: SVG_balance_26_gold,
                alt: "",
              },
            },
            {
              title: "Derecho de Familia",
              text: `Manejo sensible y profesional de casos de divorcio, custodia 
      y sucesiones.`,
              cta: "Contratar servicio",
              img: {
                src: SVG_balance_26_gold,
                alt: "",
              },
            },
          ]}
        />
      </>
    </section>
  );
}
