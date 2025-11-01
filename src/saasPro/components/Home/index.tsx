import styles from "./index.module.scss";

interface HomeProps {
  title: string;
  text: string;
  button: {
    text: string;
    onClick: () => void;
  };
}
export default function Home({ title, text, button }: HomeProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.button__container}>
        <button
          type="button"
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            button.onClick();
          }}
        >
          {button.text}
        </button>
      </div>
    </div>
  );
}
