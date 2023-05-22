import { Content } from "./componets/Content";
import { Header } from "./componets/Header";
import { ToDoContextProvider } from "./contexts/ToDo";
import { ToastProvider } from "./contexts/Toast";

function App() {
  return (
    <>
      <Header />
      <ToastProvider>
        <ToDoContextProvider>
          <Content />
        </ToDoContextProvider>
      </ToastProvider>
    </>
  );
}

export default App;
