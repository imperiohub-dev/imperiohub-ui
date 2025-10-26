import styles from "./index.module.scss";
import NavBarMinimal from "../../../components/NavBar/components/NavBarMinimal";
import SVG_balance_24_gold from "../../../assets/svg/SVG_balance_26_gold.svg";
export default function NavBar() {
  return (
    <NavBarMinimal
      brand={{
        title: "Justicia Digital",
        img: { src: SVG_balance_24_gold },
        navigate: "/",
      }}
      links={[
        {
          label: "Inicio",
          href: "/",
          navigate: "/",
        },
        {
          label: "Servicios",
          href: "/servicios",
          navigate: "/servicios",
        },
        { label: "Blog", href: "/blog", navigate: "/blog" },
        {
          label: "Agendar Cita",
          href: "/agendar-cita",
          navigate: "/agendar-cita",
        },
      ]}
    />
  );
}
