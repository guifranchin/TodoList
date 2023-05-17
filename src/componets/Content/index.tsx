import style from "./index.module.css";
import Plus from "../../assets/plus.svg";
import { NoContent } from "../NoContent";
import { useState, useEffect } from "react";
import { TodoList } from "../TodoList";
import { Task } from "../../models/Task";
import { v4 as uuidv4 } from "uuid";
import { api } from "../../api";
export const Content = () => {
  const [description, setDescription] = useState<string>("");

  const [taskList, setTaskList] = useState<Task[]>([]);

  const tasksDone = taskList.filter((task) => {
    return task.isDone !== false;
  });

  const disabledButton = !description.length;

  const addTaskOnList = () => {
    const newTask = {
      id: uuidv4(),
      description,
      isDone: false,
    };

    setTaskList((currentValue) => [...currentValue, newTask]);
    setDescription("");
  };

  const removeTaskOnDelete = (id: string) => {
    setTaskList((currentValue) =>
      currentValue.filter((task) => task.id !== id)
    );
  };

  const changeStatusCheckBox = (id: string) => {
    const elements = taskList.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }

      return task;
    });

    setTaskList(elements);
  };

  useEffect(() => {
    api
      .get("tasks")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setTaskList(data);
      });
  }, []);

  return (
    <section className={style.section_container}>
      <main>
        <article className={style.input_container}>
          <input
            className={style.input}
            type="text"
            value={description}
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <article>
            <button
              className={style.button}
              disabled={disabledButton}
              onClick={() => addTaskOnList()}
            >
              Criar
              <img src={Plus} alt="Logo de mais"></img>
            </button>
          </article>
        </article>
        <article className={style.content_header}>
          <article className={style.tasks_container}>
            <p className={style.task_created}>Tarefas Criadas</p>
            <span className={style.span_value}>{taskList.length}</span>
          </article>
          <article className={style.tasks_container}>
            <p className={style.tasks_done}>Concluidas</p>
            <span className={style.span_value}>
              {" "}
              {tasksDone.length} de {taskList.length}
            </span>
          </article>
        </article>

        {!taskList.length ? (
          <NoContent />
        ) : (
          <TodoList
            list={taskList}
            changeStatusCheckBox={changeStatusCheckBox}
            onDelete={removeTaskOnDelete}
          />
        )}
      </main>
    </section>
  );
};
