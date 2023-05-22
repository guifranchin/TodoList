import { useContext } from "react";
import ToastContext, { ToastContextProps } from "../../contexts/Toast";

const useToastContext = () => {
    const toastContext = useContext<ToastContextProps>(ToastContext)

    return toastContext;
}

export default useToastContext