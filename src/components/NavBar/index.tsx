import { defaultBrand } from "../../models/nav/nav.model";
import NavBarSearch from "./components/NavBarSearch";
import NavBarMinimal from "./components/NavBarMinimal";
import NavBarSegmented from "./components/NavBarSegmented";

export default {
  NavBarMinimal,
  // NavBarSearch,
  // NavBarSegmented
};

/* ========== DEMO para ver las 3 variantes ========== */

export function DemoNavBars() {
  return (
    <>
      <NavBarMinimal
        brand={defaultBrand}
        links={[
          { label: "Inicio", href: "#" },
          { label: "Productos", href: "#" },
          { label: "Precios", href: "#" },
          {
            label: "Contacto",
            href: "#",
          },
        ]}
      />
      <div style={{ height: "4rem" }} />
      {/* <NavBarSearch
        brand={defaultBrand}
        src={"https://i.pravatar.cc/64?img=13"}
        placeholder={"Buscar producto..."}
        links={[
          { label: "Docs", href: "#docs" },
          { label: "Comunidad", href: "#comunidad" },
          { label: "Recursos", href: "#recursos" },
        ]}
      />
      <div style={{ height: "4rem" }} />
      <NavBarSegmented
        brand={defaultBrand}
        buttonText1="Ingresar"
        buttonText2="Probar gratis"
        links={[
          { label: "Estrategias", href: "#estrategias" },
          { label: "Mercados", href: "#mercados" },
          { label: "Reportes", href: "#reportes" },
        ]}
      /> */}
    </>
  );
}
