import { useContext } from "react";
import ToDoContext, { ToDoContextProps } from "../../contexts/ToDo";

const useToDoContext = () => {
    const todoContext = useContext<ToDoContextProps>(ToDoContext)

    return todoContext;
}

export default useToDoContext