import { Content } from "./componets/Content";
import { Header } from "./componets/Header";
import { ToDoContextProvider } from "./contexts/ToDo";

function App() {
  return (
    <>
      <Header />
      <ToDoContextProvider>
        <Content />
      </ToDoContextProvider>
    </>
  );
}

export default App;
