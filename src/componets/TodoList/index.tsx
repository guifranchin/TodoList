import styles from "./index.module.css";
import Trash from "../../assets/trash.svg";
import { Task } from "../../models/Task";

interface TodoListProps {
  list: Task[];
  onDelete: (id: string) => void
}

export const TodoList = ({ list, onDelete }: TodoListProps) => {
  return (
    <section className={styles.section_container}>
      {list.map((task) => (
        <article className={styles.content_container} id={task.id}>
          <input type="checkbox" id={task.id} defaultChecked={task.isDone} />
          <p className={styles.text}>{task.description}</p>
          <img className={styles.trash} src={Trash} alt="icone de lixeira" onClick={() => onDelete(task.id)}/>
        </article>
      ))}
    </section>
  );
};
