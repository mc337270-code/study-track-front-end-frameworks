import { Task } from "../types";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TaskList({ tasks, onToggle, onRemove }: Props) {
  if (tasks.length === 0) return <p>Nenhuma tarefa por aqui. 🎉</p>;
  return (
    <ul className="tasks">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
}
