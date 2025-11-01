//import styles from "./index.module.scss";
import Home from "../../components/Home";

export default function HomePage() {
  return (
    <Home
      title="La plataforma SaaS que impulsa tu negocio"
      text="Gestiona, automatiza y escala tu empresa..."
      button={{
        text: "Crear cuenta gratis",
        onClick: () => console.log("Registrarse"),
      }}
    />
  );
}
