import styles from "./index.module.scss";
import FirstTitle from "../../components/utils/FirstTitle";
import FormAppoiment from "../../components/utils/FormAppoiment";
export default function AgendarCita() {
  return (
    <section className={styles.agendarCita}>
      <FirstTitle
        title="Agende su Consulta"
        text="Complete el siguiente formulario y nuestro equipo se pondrá en contacto con usted a la brevedad."
      />
      <FormAppoiment
        areas={[
          "Derecho Corporativo",
          "Derecho Laboral",
          "Propiedad Intelectual",
          "Derecho Penal",
        ]}
        onSubmit={() => {}}
      />
    </section>
  );
}
