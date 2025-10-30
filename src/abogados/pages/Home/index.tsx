//import styles from "./index.module.scss";
import CallToActionHome from "../../components/utils/CallToActionHome";
import CallToActionList from "../../components/utils/CallToActionList";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <CallToActionHome
        title="Defensa legal Estrategia Digital"
        text={`Combinamos experiencia legal, tradicional con un enfoque innovador 
          paraproteger tus intereses en el complejo mundo actual.`}
        img={{ src: "/legal.png", alt: "" }}
        cta={{
          title: "Agendar Consulta Gratuita",
          navigate: "/agendar.cita",
          cb: () => {},
        }}
      />
      <CallToActionList
        title={"¿Por qué elegirnos?"}
        text={`Nuestra firma se basa en tres pilares 
  fundamentales para garantizar el mejor resultado para ti.`}
        ctas={[
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
            onClick: () => {},
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
            onClick: () => {},
          },
        ]}
      />
      <Footer
        brand={{
          logo: "⚖️",
          name: "Justicia Digital",
          tagline: "Defendiendo tus derechos con experiencia y dedicación.",
        }}
        nav={{
          title: "Navegación",
          links: [
            { label: "Inicio", href: "#" },
            { label: "Servicios", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Agendar Cita", href: "#" },
          ],
        }}
        contact={{
          title: "Contacto",
          email: "info@justiciadigital.com",
          phone: "+1 (123) 456-7890",
          address: "123 Calle Falsa, Ciudad, País",
        }}
        social={{
          title: "Síguenos",
          items: [
            { name: "twitter", href: "#" },
            { name: "linkedin", href: "#" },
            { name: "facebook", href: "#" },
          ],
        }}
        legal={{
          rights: "© 2025 Justicia Digital. Todos los derechos reservados.",
          disclaimer:
            "La información en este sitio web es solo para fines informativos y no constituye asesoramiento legal.",
        }}
      />
    </>
  );
}
