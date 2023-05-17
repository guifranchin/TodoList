import styles from "./index.module.css";
import Trash from "../../assets/trash.svg";
import { Task } from "../../models/Task";

interface TodoListProps {
  list: Task[];
  onDelete: (id: string) => void,
  changeStatusCheckBox: (id: string) => void
}

export const TodoList = ({ list, onDelete, changeStatusCheckBox }: TodoListProps) => {
  return (
    <section className={styles.section_container}>
      {list.map((task) => (
        <article className={styles.content_container} id={task.id}>
          <input type="checkbox" id={task.id} defaultChecked={task.isDone} onChange={() => changeStatusCheckBox(task.id)} />
          <p className={task.isDone ? styles.text_scratched : styles.text}>{task.description}</p>
          <img className={styles.trash} src={Trash} alt="icone de lixeira" onClick={() => onDelete(task.id)}/>
        </article>
      ))}
    </section>
  );
};
