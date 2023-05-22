import { createContext, useState } from "react";
import { Toast } from "../../componets/Toats";

type Toast = {
  message: string;
  type: "success" | "danger";
};

export type ToastContextProps = {
  isHidden: boolean;
  showToast(data: Toast): void;
};

type ToastProviderProps = {
  children: React.ReactNode;
};

const ToastContext = createContext<ToastContextProps>({
  isHidden: false,
  showToast: () => {},
} as ToastContextProps);

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<Toast>({ message: "", type: "success" });

  const [isHidden, setIsHidden] = useState<boolean>(true);

  const showToast = ({ message, type }: Toast) => {
    setToast({ message, type });

    setIsHidden(false);

    setTimeout(() => {
      setIsHidden(true);
    }, 2800);
  };

  return (
    <ToastContext.Provider value={{ isHidden, showToast }}>
      {!isHidden && <Toast message={toast.message} type={toast.type} />}
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider };
export default ToastContext