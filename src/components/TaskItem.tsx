import { Task } from "../types";
import Button from "./Button";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TaskItem({ task, onToggle, onRemove }: Props) {
  return (
    <li className="task">
      <label>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
          {task.title} <small>({task.subject})</small>
        </span>
      </label>
      <Button variant="danger" onClick={() => onRemove(task.id)}>Excluir</Button>
    </li>
  );
}
