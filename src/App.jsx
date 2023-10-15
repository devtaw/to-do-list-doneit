import "./App.css";
import { TodoItem } from "./components/TodoItem";

const FAKE_DATA = [
  {
    description: "Learn React",
    isCompleted: false,
  },
  {
    description: "Learn Vite",
    isCompleted: false,
  },
  {
    description: "Learn Tailwind",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(FAKE_DATA);
  return (
    <>
      <h1>Done It - Lista de Tarefas</h1>

      <TodoItem />
      <TodoItem />
      <TodoItem />
    </>
  );
}
export default App;
