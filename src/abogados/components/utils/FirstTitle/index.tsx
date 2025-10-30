import styles from "./index.module.scss";
interface FirstTitleProps {
  title: string;
  text: string;
}
export default function FirstTitle({ title, text }: FirstTitleProps) {
  return (
    <section className={styles.firstTitle}>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}
