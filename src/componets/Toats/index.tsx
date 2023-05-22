import useToastContext from "../../hooks/useToast";
import styles from "./index.module.css";

export type ToastProps = {
  message: string;
  type: "success" | "danger";
};
export const Toast = ({ message, type }: ToastProps) => {
  const { isHidden } = useToastContext();
  return (
    <aside className={isHidden ? styles.container : styles.container_show}>
      <p className={type === "success" ? styles.success : styles.danger}>
        {message}
      </p>
    </aside>
  );
};
