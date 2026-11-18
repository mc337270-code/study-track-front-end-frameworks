import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Filter, Task } from "../types";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import StatsPanel from "../components/StatsPanel";
import FilterBar from "../components/FilterBar";
import Button from "../components/Button";

interface ApiTodo { id: number; title: string; completed: boolean; }

const initialTasks: Task[] = [
  { id: 1, title: "Estudar Hooks", subject: "Front-end", done: false },
  { id: 2, title: "Revisar TypeScript", subject: "Front-end", done: true },
];

export default function Dashboard() {
  const { user } = useAuth();
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", initialTasks);
  const [filter, setFilter] = useState<Filter>("todas");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { document.title = "Dashboard | StudyTrack"; }, []);

  const stats = useMemo(
    () => ({ total: tasks.length, done: tasks.filter((t) => t.done).length }),
    [tasks]
  );

  const visible = useMemo(
    () =>
      tasks.filter((t) =>
        filter === "todas" ? true : filter === "concluidas" ? t.done : !t.done
      ),
    [tasks, filter]
  );

  const add = (title: string, subject: string) =>
    setTasks([...tasks, { id: Date.now(), title, subject, done: false }]);
  const toggle = (id: number) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  // Integração com API REST real (JSONPlaceholder)
  const importFromApi = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      if (!res.ok) throw new Error("Falha na requisição");
      const data: ApiTodo[] = await res.json();
      const imported: Task[] = data.map((d) => ({
        id: 100000 + d.id, title: d.title, subject: "API", done: d.completed,
      }));
      setTasks([...tasks.filter((t) => t.id < 100000), ...imported]);
    } catch {
      setError("Não foi possível importar as tarefas.");
    } finally {
      setLoading(false);
    }
  };
  const remove = (id: number) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <>
      <h1>Olá, {user}! 👋</h1>
      <StatsPanel total={stats.total} done={stats.done} />
      <TaskForm onAdd={add} />
      <div className="row">
        <Button variant="ghost" onClick={importFromApi} disabled={loading}>
          {loading ? "Importando..." : "⬇️ Importar tarefas da API"}
        </Button>
        {error && <span>{error}</span>}
      </div>
      <FilterBar current={filter} onChange={setFilter} />
      <TaskList tasks={visible} onToggle={toggle} onRemove={remove} />
    </>
  );
}
