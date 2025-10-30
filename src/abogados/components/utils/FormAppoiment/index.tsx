import { useId } from "react";
import styles from "./index.module.scss";
interface FormAppoimentProps {
  areas: string[];
  onSubmit: () => unknown;
}
export default function FormAppoiment({ areas, onSubmit }: FormAppoimentProps) {
  const nameId = useId();
  const emailId = useId();
  const areaId = useId();
  const descId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    // onSubmit?.(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Fila: Nombre / Email */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor={nameId}>
            Nombre Completo
          </label>
          <input
            className={styles.input}
            id={nameId}
            name="nombre"
            type="text"
            placeholder="Su nombre"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={emailId}>
            Correo Electrónico
          </label>
          <input
            className={styles.input}
            id={emailId}
            name="email"
            type="email"
            placeholder="su@email.com"
            required
          />
        </div>
      </div>

      {/* Área de interés */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor={areaId}>
          Área de Interés
        </label>
        <select
          className={styles.select}
          id={areaId}
          name="area"
          defaultValue={areas[0]}
          required
        >
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      {/* Descripción */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor={descId}>
          Breve descripción de su caso
        </label>
        <textarea
          className={styles.textarea}
          id={descId}
          name="descripcion"
          placeholder="Cuéntenos sobre su situación..."
          rows={6}
          required
        />
      </div>

      {/* Botón */}
      <div className={styles.actions}>
        <button className={styles.button} type="submit">
          Enviar Solicitud
        </button>
      </div>
    </form>
  );
}
