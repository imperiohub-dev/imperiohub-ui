import { div } from "framer-motion/client";
import styles from "./index.module.scss";

interface BoxBlog {
  autor: string;
  date: string; // ✅ cuando se recibe como texto
  title: string;
  description: string;
  cta: string;
  onClick: () => void;
}

type BoxBlogProp = {
  blogs: BoxBlog[];
};
export default function BoxBlog({ blogs }: BoxBlogProp) {
  return (
    <section className={styles.container}>
      {blogs.map(
        ({ autor, date, title, description, cta, onClick: cb }, inx) => (
          <div key={inx} className={styles.blog}>
            <p className={styles.autor}>{`${autor} ${date}`} </p>
            <h3>{title}</h3>
            <p>{description}</p>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                cb?.();
              }}
            >
              {cta}
            </a>
          </div>
        )
      )}
    </section>
  );
}
