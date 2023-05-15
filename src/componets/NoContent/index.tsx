import Clipboard from "../../assets/clipboard.svg";
import styles from "./index.module.css";

export const NoContent = () => {
  return (
    <section className={styles.section_container}>
      <img src={Clipboard} alt="icone de clipboard" />
      <p className={styles.text}>
        <strong>Você ainda não tem tarefas cadastras</strong> 
        Crie tarefas e organize seus itens a fazer
      </p>
    </section>
  );
};
